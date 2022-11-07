import { createBrowserRouter } from 'react-router-dom';
import { LoginPage, NotFoundPage, SignUpPage } from '../pages';

export const UnauthenticatedRoutes = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/entrar',
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/cadastrar',
    element: <SignUpPage />,
    errorElement: <NotFoundPage />,
  },
]);
