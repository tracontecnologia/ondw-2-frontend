import { DateTime } from 'luxon';
import { DateHelper, NumberHelper } from '../helpers';
import { IBilling, IBillingForm, ICreateNewBilling } from '../interfaces';

function parseStatus(status: string) {
  const reference: any = {
    PENDING: 'Pendente',
    PAID: 'Pago',
    LATE: 'Atrasado',
  };

  return reference[status];
}

function parsePayload(data: IBilling): IBilling & { customerName: string } {
  return {
    ...data,
    value: NumberHelper.toBRL(Number(data.value)),
    status: parseStatus(data.status),
    dueDate: DateHelper.toFormat(data.dueDate),
    customerName: data.customer.name,
  };
}

function formToPayload(form: IBillingForm): ICreateNewBilling {
  return {
    description: form.description,
    dueDate: DateTime.fromFormat(form.dueDate, 'yyyy-MM-dd').toISO(),
    customerId: form.customerId.value,
    value: NumberHelper.brlToNumber(form.value),
  };
}

export const Billing = {
  parsePayload,
  formToPayload,
};
