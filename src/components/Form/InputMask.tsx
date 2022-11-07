import ReactInputMask from 'react-input-mask';
import classNames from 'classnames';
import { InputErrorMessage } from './InputErrorMessage';

enum MaskTypesEnum {
  CPF_CNPJ = 'cpfCnpj',
}

type Props = {
  mask: MaskTypesEnum | string;
  className?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  value?: string;
  onBlur?: VoidFunction;
  onChange?: VoidFunction;
  errors?: any;
};

export function InputMask({
  name,
  mask,
  className,
  value,
  errors,
  ...props
}: Props) {
  function getMask() {
    switch (mask) {
      case MaskTypesEnum.CPF_CNPJ:
        if (!value) return '';
        return value.length <= 14 ? '999.999.999-999' : '99.999.999/9999-99';
      default:
        return mask;
    }
  }

  return (
    <div className="w-full flex flex-col items-start justify-start gap-1">
      <ReactInputMask
        value={value}
        {...props}
        mask={getMask()}
        maskChar=""
        className={classNames(
          'py-3 px-4 outline-none rounded-md transition-all placeholder-gray-400 border border-gray-100 hover:border-brand-primary-300 focus:border-brand-primary-300 focus:ring-1 ring-brand-primary-300 text-gray-600 active:border-brand-primary-400',
          className
        )}
      />
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
}
