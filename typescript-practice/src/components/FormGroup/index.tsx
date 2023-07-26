import { FormEvent, ReactNode } from 'react';

import './index.css';

interface FormGroupProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  className: string;
  children: ReactNode;
}

export const FormGroup = ({
  onSubmit,
  className,
  children,
}: FormGroupProps) => {
  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
