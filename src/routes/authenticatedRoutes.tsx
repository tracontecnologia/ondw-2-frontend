import { createBrowserRouter } from 'react-router-dom';

import {
  BillingsAddPage,
  BillingsEditPage,
  BillingsPage,
  CustomersAddPage,
  CustomersEditPage,
  CustomersPage,
  DashboardPage,
  NotFoundPage,
} from '../pages';

export const AuthenticatedRoutes = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/clientes',
    element: <CustomersPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/clientes/adicionar',
    element: <CustomersAddPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/clientes/alterar/:id',
    element: <CustomersEditPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/cobrancas',
    element: <BillingsPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/cobrancas/adicionar',
    element: <BillingsAddPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/cobrancas/alterar/:id',
    element: <BillingsEditPage />,
    errorElement: <NotFoundPage />,
  },
]);
