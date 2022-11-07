import ReactSelect, { StylesConfig } from 'react-select';

import { InputErrorMessage } from './InputErrorMessage';

type Props = {
  id?: string;
  name?: string;
  placeholder?: string;
  errors?: any;
  options: { label: string; value: string | number }[];
  onChange?: VoidFunction;
};

export function Select({ name, errors, options, ...props }: Props) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-1">
      <ReactSelect
        name={name}
        {...props}
        options={options}
        styles={colourStyles}
        noOptionsMessage={(obj) =>
          obj.inputValue
            ? `Opção "${obj.inputValue}" não foi encontrada`
            : 'Nenhuma opção'
        }
      />
      <InputErrorMessage name={`${name}.value`} errors={errors} />
    </div>
  );
}

const colourStyles: StylesConfig = {
  container: (styles) => ({ ...styles, width: '100%' }),
  control: (styles, { isFocused, menuIsOpen }) => ({
    ...styles,
    padding: '6px 0',
    backgroundColor: '#fff',
    borderColor: menuIsOpen
      ? 'hsla(184, 99%, 38%, 1)'
      : 'rgba(243, 244, 246, 1)',
    ':hover': {
      borderColor: 'hsla(184, 99%, 38%, 1)',
    },
    ':active': {
      borderColor: 'hsla(184, 99%, 38%, 1)',
    },
    boxShadow: isFocused ? '0 0 0 1px hsla(184, 99%, 38%, 1)' : '',
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    transition: 'all 50ms',
    backgroundColor: isSelected ? 'hsla(184, 99%, 38%, 1)' : '#fff',
    color: isSelected ? '#fff' : 'rgba(75, 85, 99, 1)',
    ':hover': {
      backgroundColor: isSelected
        ? 'hsla(184, 99%, 38%, 1)'
        : 'hsla(184, 99%, 95%, 1)',
      color: isSelected ? '#fff' : 'rgba(75, 85, 99, 1)',
    },
  }),
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles, color: 'rgba(156, 163, 175, 1)' }),
};
