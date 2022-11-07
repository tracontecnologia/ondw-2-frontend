import classNames from 'classnames';
import CurrencyInput from 'react-currency-input-field';
import { InputErrorMessage } from './InputErrorMessage';

type Props = {
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  onChange?: (value?: string) => void;
  errors?: any;
};

export function InputCurrency({
  onChange,
  name,
  className,
  errors,
  ...props
}: Props) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-1">
      <CurrencyInput
        {...props}
        groupSeparator="."
        decimalSeparator=","
        decimalsLimit={2}
        onValueChange={(value) => (onChange ? onChange(value) : () => {})}
        className={classNames(
          'py-3 px-4 outline-none rounded-md transition-all placeholder-gray-400 border border-gray-100 hover:border-brand-primary-300 focus:border-brand-primary-300 focus:ring-1 ring-brand-primary-300 text-gray-600 active:border-brand-primary-400',
          className
        )}
      />
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
}
