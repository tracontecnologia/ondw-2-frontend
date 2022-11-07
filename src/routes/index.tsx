import { RouterProvider } from 'react-router-dom';
import { useAuthContext } from '../contexts';
import { AuthenticatedRoutes } from './authenticatedRoutes';
import { UnauthenticatedRoutes } from './unauthenticatedRoutes';

export function AppRoutes() {
  const { token, user } = useAuthContext();
  const isAuth = !!token && !!user;
  
  return (
    <RouterProvider
      router={isAuth ? AuthenticatedRoutes : UnauthenticatedRoutes}
    />
  );
}
