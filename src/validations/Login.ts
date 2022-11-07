import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginSchema = yup.object({
  email: yup
    .string()
    .email('Preencha um e-mail válido')
    .required('Preencha um e-mail'),
  password: yup.string().required('Preencha uma senha'),
});

export const LoginResolver = yupResolver(LoginSchema);
