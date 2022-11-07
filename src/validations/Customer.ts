import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { cpf, cnpj } from 'cpf-cnpj-validator';

const CustomerAddSchema = yup.object({
  name: yup.string().required('Preencha o nome'),
  cpfCnpj: yup
    .string()
    .required('Preencha um CPF ou CNPJ')
    .test({
      name: 'cpfCnpj',
      message: 'Preencha um CPF ou CNPJ válido!',
      test: (value?: string) => {
        if (!value) return false;
        return value.length <= 14 ? cpf.isValid(value) : cnpj.isValid(value);
      },
    }),
  email: yup
    .string()
    .email('Preencha um e-mail válido')
    .required('Preencha o e-mail'),
  cellphone: yup.string().required('Preencha o celular'),
});

export const CustomerAddResolver = yupResolver(CustomerAddSchema);
