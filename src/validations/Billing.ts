import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const BillingAddSchema = yup.object({
  customerId: yup.object({
    label: yup.string(),
    value: yup.string().required('Selecione um cliente'),
  }),
  value: yup.string().required('Preencha o valor'),
  description: yup.string().required('Preencha a descrição'),
  dueDate: yup.string().required('Preencha uma data de vencimento'),
});

export const BillingAddResolver = yupResolver(BillingAddSchema);
