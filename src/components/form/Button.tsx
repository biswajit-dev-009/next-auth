import React from 'react';

const buttonSizes = {
  small: 'h-8 px-2 text-base',
  medium: 'h-10 px-4 text-lg',
  large: 'h-12 px-6 text-2xl',
};
const buttonVarients = {
  outline: 'border border-slate-500 text-gray-800 hover:bg-slate-50',
  contained: 'bg-blue-950 text-white hover:bg-white hover:text-black hover:border hover:border-blue-950',
};

type ButtonType = 'submit' | 'button';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'outline' | 'contained';

interface Props {
  type: ButtonType;
  size?: ButtonSize;
  varient?: ButtonVariant;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  extraStyles?: string;
  children: string | number | React.ReactNode;
}

const Button: React.FC<Props> = ({
  type,
  size = 'medium',
  onClick,
  children,
  extraStyles,
  varient = 'outline',
}) => {
  const buttonSize = buttonSizes[size];
  const buttonVarient = buttonVarients[varient];

  return (
    <button
      className={[
        'w-full rounded-lg font-bold',
        buttonSize,
        buttonVarient,
        extraStyles
      ].join(' ')}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
