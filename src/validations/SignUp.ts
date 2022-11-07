import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const SignUpSchema = yup.object({
  firstName: yup.string().required('Preencha seu nome'),
  lastName: yup.string().required('Preencha seu sobrenome'),
  email: yup
    .string()
    .email('Preencha um e-mail válido')
    .required('Preencha um e-mail'),
  password: yup.string().required('Preencha uma senha'),
});

export const SignUpResolver = yupResolver(SignUpSchema);
