import { AppContexts } from './contexts';
import { AppRoutes } from './routes';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <AppContexts>
      <Toaster toastOptions={{ duration: 2000 }} />
      <AppRoutes />
    </AppContexts>
  );
}
