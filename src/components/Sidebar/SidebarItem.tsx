import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  isSelected?: boolean;
};

export function SidebarItem({ children, isSelected = false }: Props) {
  return (
    <button
      className={classNames(
        'w-full p-4 font-semibold flex items-center gap-2 rounded-md transition-all outline-none',
        { 'bg-brand-primary-300 text-white': isSelected },
        {
          'text-gray-700 hover:bg-brand-primary-300 hover:text-white focus:bg-brand-primary-300 focus:text-white active:ring-1 ring-brand-primary-200':
            !isSelected,
        }
      )}
    >
      {children}
    </button>
  );
}
