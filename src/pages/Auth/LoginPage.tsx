import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Logo, Container, Input, Button } from '../../components';
import { useAuthContext } from '../../contexts';
import { LoginResolver } from '../../validations';

type ILoginForm = {
  email: string;
  password: string;
};

export function LoginPage() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>({ resolver: LoginResolver });
  const { login } = useAuthContext();

  async function onSubmit(values: ILoginForm) {
    login(values.email, values.password);
  }

  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="py-10">
        <Logo />
      </div>
      <Container className="w-full max-w-[500px] flex flex-col items-center justify-center p-10">
        <h1 className="text-2xl font-bold text-gray-700 text-center mt-2">
          Acesse sua conta
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Gerencie sua vida financeira
        </p>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
            Conectar
          </Button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-5 py-2">
          Ainda não possui uma conta?
        </p>
        <Link to="/cadastrar">
          <Button variant="link">Criar conta agora</Button>
        </Link>
      </Container>
    </div>
  );
}
