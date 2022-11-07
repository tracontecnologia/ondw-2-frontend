import classNames from 'classnames';

type Props = {
  type?: 'button' | 'submit';
  variant?: 'primary' | 'link';
  size?: 'small' | 'medium';
  className?: string;
  children: React.ReactNode;
};

export function Button({
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className,
  children,
}: Props) {
  return (
    <button
      type={type}
      className={classNames(
        'font-semibold rounded-md transition-all outline-none',
        {
          'text-white bg-brand-primary-300 hover:bg-brand-primary-400 focus:bg-brand-primary-400 focus:ring-1 ring-brand-primary-400 active:bg-brand-primary-400':
            variant === 'primary',
        },
        {
          'hover:underline bg-transparent hover:text-brand-primary-400 text-brand-primary-300 focus:text-brand-primary-400 focus:ring-1 ring-brand-primary-400':
            variant === 'link',
        },
        {
          'text-base py-3 px-4': size === 'medium',
        },
        {
          'text-sm py-2 px-3': size === 'small',
        },
        className
      )}
    >
      {children}
    </button>
  );
}
