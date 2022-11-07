import classNames from 'classnames';
import { InputErrorMessage } from './InputErrorMessage';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { errors?: any };

export function Input({ className, errors, name, ...props }: Props) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-1">
      <input
        name={name}
        className={classNames(
          'py-3 px-4 outline-none rounded-md transition-all placeholder-gray-400 border border-gray-100 hover:border-brand-primary-300 focus:border-brand-primary-300 focus:ring-1 ring-brand-primary-300 text-gray-600 active:border-brand-primary-400',
          className
        )}
        {...props}
      />
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
}
