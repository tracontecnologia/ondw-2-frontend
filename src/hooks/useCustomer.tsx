import { useMemo, useState } from 'react';

import { ICustomer } from '../interfaces';
import { CustomerService } from '../services';

export const useCustomer = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  async function findAllCustomers() {
    const { status, data } = await CustomerService.findAll();
    if (status === 200) {
      setCustomers(data);
    }
  }

  const customersList = useMemo(
    () =>
      customers.map((customer) => ({
        label: customer.name,
        value: customer.id,
      })),
    [customers]
  );

  return {
    customers,
    customersList,
    findAllCustomers,
  };
};
