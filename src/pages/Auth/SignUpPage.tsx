import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import {
  Logo,
  Container,
  Input,
  Button,
  Alert,
  AlertEnum,
} from '../../components';
import { useAuthContext } from '../../contexts';
import { SignUpResolver } from '../../validations';

type ISignUpForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export function SignUpPage() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ISignUpForm>({ resolver: SignUpResolver });
  const { signUp } = useAuthContext();
  const [alert, setAlert] = useState<
    { type: AlertEnum; message: string } | undefined
  >();

  async function onSubmit(values: ISignUpForm) {
    try {
      setAlert(undefined);
      await signUp(values);
      setAlert({
        type: AlertEnum.SUCCESS,
        message: 'Cadastro efetuado com sucesso!',
      });
      reset({ firstName: '', lastName: '', email: '', password: '' });
    } catch (error) {
      setAlert({
        type: AlertEnum.ERROR,
        message: 'Houve um erro inesperado. Por favor, tente novamente!',
      });
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="py-10">
        <Logo />
      </div>
      <Container className="w-full max-w-[500px] flex flex-col items-center justify-center p-10">
        <h1 className="text-2xl font-bold text-gray-700 text-center mt-2 mb-8">
          Crie sua conta
        </h1>
        {alert && <Alert type={alert.type}>{alert.message}</Alert>}
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex items-center justify-between gap-2">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  errors={errors}
                  className="w-full mb-2"
                  type="firstName"
                  placeholder="Nome"
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  errors={errors}
                  className="w-full mb-2"
                  type="lastName"
                  placeholder="Sobrenome"
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
                errors={errors}
                className="w-full mb-2"
                type="email"
                placeholder="E-mail"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                errors={errors}
                className="w-full mb-2"
                type="password"
                placeholder="Senha"
              />
            )}
          />
          <Button type="submit" className="w-full">
            Criar conta
          </Button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-5 py-2">
          Já possui uma conta?
        </p>
        <Link to="/">
          <Button variant="link">Acessar conta agora</Button>
        </Link>
      </Container>
    </div>
  );
}
