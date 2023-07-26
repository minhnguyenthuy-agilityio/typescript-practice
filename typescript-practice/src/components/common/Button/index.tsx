import { MouseEventHandler, ReactNode } from 'react';

import './index.css';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className: string;
  isDisabled?: boolean;
  children: ReactNode;
}

export const Button = ({
  type,
  onClick,
  className,
  isDisabled,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      value="button"
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
