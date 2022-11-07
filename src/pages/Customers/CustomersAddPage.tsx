import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

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

type ICustomersAddForm = Omit<ICustomer, 'id'>;

export function CustomersAddPage() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICustomersAddForm>({ resolver: CustomerAddResolver });

  async function onSubmit(values: ICustomersAddForm) {
    try {
      const { status } = await CustomerService.createNew(values);
      if (status === 201) {
        toast.success('Cliente cadastro com sucesso!');
        reset({ name: '', cpfCnpj: '', email: '', cellphone: '' });
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <SidebarLayout>
      <PageTitle title="Adicionar novo cliente" />
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
