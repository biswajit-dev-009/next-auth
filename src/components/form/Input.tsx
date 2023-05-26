import React from 'react';

const inputSizes = {
  small: 'h-8 px-2 text-base',
  medium: 'h-10 px-4 text-lg',
  large: 'h-12 px-6 text-2xl',
};

type InputType = 'text' | 'number' | 'button' | 'password';
type ValueType = string | number | readonly string[] | undefined;
type InputSize = 'small' | 'medium' | 'large';

interface Props {
  type: InputType;
  placeholder?: string;
  value: ValueType;
  name?: string;
  label?: string;
  size?: InputSize;
  extraStyles?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  type,
  value,
  name,
  placeholder,
  label,
  size = 'medium',
  extraStyles,
  onChange,
}) => {
  const inputSize = inputSizes[size];

  return (
    <>
      {label && <label>{label}</label>}
      <input
        className={[
          'w-full my-2 rounded-lg border border-slate-500 text-gray-800',
          inputSize,
          extraStyles
        ].join(' ')}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
