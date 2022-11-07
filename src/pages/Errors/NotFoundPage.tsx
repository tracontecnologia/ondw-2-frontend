import { useLocation } from 'react-router-dom';
import { Logo } from '../../components';

export function NotFoundPage() {
  const { pathname } = useLocation();
  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="py-10">
        <Logo />
      </div>
      <h1 className="text-3xl text-gray-700 text-center py-4">
        Página não encontrada!
      </h1>
      <p className="text-gray-500 text-center">
        Não foi possível encontrar a página que você busca:
      </p>
      <p className="p-4 rounded-md bg-white mt-2 text-gray-500">{pathname}</p>
    </div>
  );
}
