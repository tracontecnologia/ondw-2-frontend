import {
  IBilling,
  IBillingDashboard,
  ICreateNewBilling,
  IUpdateBilling,
} from '../interfaces';
import { Api } from '../providers';

function dashboard() {
  return Api.get<IBillingDashboard>('/v1/billings/dashboard');
}

function findAll() {
  return Api.get<IBilling[]>('/v1/billings');
}

function createNew(data: ICreateNewBilling) {
  return Api.post<IBilling>('/v1/billings', data);
}

function findById(id: string) {
  return Api.get<IBilling>(`/v1/billings/${id}`);
}

function updateById(id: string, data: IUpdateBilling) {
  return Api.patch<IBilling>(`/v1/billings/${id}`, data);
}

function deleteById(id: string) {
  return Api.delete<void>(`/v1/billings/${id}`);
}

export const BillingService = {
  dashboard,
  findAll,
  createNew,
  findById,
  updateById,
  deleteById,
};
