import { ICustomer } from '../interfaces';
import { Api } from '../providers';

function findAll() {
  return Api.get<ICustomer[]>('/v1/customers');
}

function createNew(data: Omit<ICustomer, 'id'>) {
  return Api.post<ICustomer>('/v1/customers', data);
}

function findById(id: string) {
  return Api.get<ICustomer>(`/v1/customers/${id}`);
}

function updateById(id: string, data: Omit<ICustomer, 'id'>) {
  return Api.patch<ICustomer>(`/v1/customers/${id}`, data);
}

function deleteById(id: string) {
  return Api.delete<void>(`/v1/customers/${id}`);
}

export const CustomerService = {
  findAll,
  createNew,
  findById,
  updateById,
  deleteById,
};
