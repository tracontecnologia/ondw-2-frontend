import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import {
  Button,
  Container,
  Input,
  InputCurrency,
  PageTitle,
  Select,
  SidebarLayout,
} from '../../components';
import { useCustomer } from '../../hooks';
import { IBillingForm } from '../../interfaces';
import { BillingService } from '../../services';
import { Billing } from '../../shared';
import { BillingAddResolver } from '../../validations';

export function BillingsAddPage() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IBillingForm>({ resolver: BillingAddResolver });
  const { customersList, findAllCustomers } = useCustomer();

  async function onSubmit(values: IBillingForm) {
    try {
      const { status } = await BillingService.createNew(
        Billing.formToPayload(values)
      );
      if (status === 201) {
        toast.success('Cobrança cadastrada com sucesso!');
        reset({
          description: '',
          dueDate: '',
          value: '',
          customerId: undefined,
        });
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    findAllCustomers();
  }, []);

  return (
    <SidebarLayout>
      <PageTitle title="Adicionar nova cobrança" />
      <Container className="p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg flex flex-col items-start justify-start gap-2"
        >
          <Controller
            name="customerId"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Selecione um cliente"
                errors={errors}
                options={customersList}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Descrição da cobrança"
                className="w-full"
                errors={errors}
              />
            )}
          />
          <Controller
            name="value"
            control={control}
            render={({ field }) => (
              <InputCurrency
                {...field}
                placeholder="Valor"
                className="w-full"
                errors={errors}
              />
            )}
          />
          <Controller
            name="dueDate"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                placeholder="Nome"
                className="w-full"
                errors={errors}
              />
            )}
          />
          <Button type="submit">Salvar</Button>
        </form>
      </Container>
    </SidebarLayout>
  );
}
