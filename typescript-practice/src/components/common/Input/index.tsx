import { ChangeEventHandler, KeyboardEventHandler } from 'react';

import './index.css';

interface InputProps {
  label?: string;
  type: 'text' | 'password' | 'submit' | 'number' | 'email';
  name: string;
  className: string;
  value?: string;
  placeholder?: string;
  pattern?: string;
  defaultValue?: string;
  onChange?: (name: string, value: string) => void;
  errorMessage?: string;
  minValue?: number;
  onKeyDown?: (value: string) => void;
  eventKeyDown?: string;
}

export const Input = ({
  label,
  type,
  name,
  className,
  value,
  placeholder,
  pattern,
  defaultValue,
  onChange,
  errorMessage,
  minValue,
  onKeyDown,
  eventKeyDown,
}: InputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!event) return;

    const { value, name } = event.target;

    onChange && onChange(value, name);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (!event) return;

    if (event.key === eventKeyDown && onKeyDown) {
      onKeyDown(event.currentTarget.value);
    }
  };

  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={`input-text ${className}`}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        defaultValue={defaultValue}
        onKeyDown={handleKeyDown}
        min={minValue}
      />
      {errorMessage && <span className="input-error">{errorMessage}</span>}
    </div>
  );
};
