import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import {
  Button,
  Container,
  Input,
  InputMask,
  PageTitle,
  SidebarLayout,
} from '../../components';
import { ICustomer } from '../../interfaces';
import { CustomerService } from '../../services';
import { CustomerAddResolver } from '../../validations';

type ICustomersEditForm = Omit<ICustomer, 'id'>;

export function CustomersEditPage() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICustomersEditForm>({ resolver: CustomerAddResolver });
  const { id } = useParams<{ id: string }>();

  async function onSubmit(values: ICustomersEditForm) {
    if (!id) return;
    try {
      const { status } = await CustomerService.updateById(id, values);
      if (status === 200) {
        toast.success('Cliente atualizado com sucesso!');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      const { status, data } = await CustomerService.findById(id);
      if (status === 200) {
        reset(data);
      }
    }

    fetchData();
  }, []);

  return (
    <SidebarLayout>
      <PageTitle title="Alterar dados do cliente" />
      <Container className="p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg flex flex-col items-start justify-start gap-2"
        >
          <div className="w-full flex items-start gap-2">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Nome"
                  className="w-full"
                  errors={errors}
                />
              )}
            />
            <Controller
              name="cpfCnpj"
              control={control}
              render={({ field }) => (
                <InputMask
                  {...field}
                  mask="cpfCnpj"
                  placeholder="CPF ou CNPJ"
                  className="w-full"
                  errors={errors}
                />
              )}
            />
          </div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="E-mail"
                className="w-full"
                errors={errors}
              />
            )}
          />
          <Controller
            name="cellphone"
            control={control}
            render={({ field }) => (
              <InputMask
                {...field}
                mask="(99) 99999-9999"
                placeholder="Celular"
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
