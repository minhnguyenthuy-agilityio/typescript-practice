import { ChangeEvent } from 'react';

import './index.css';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  handleSelectOptionChange: (value: string) => void;
  valueSelected?: string;
}

export const Select = ({
  options,
  handleSelectOptionChange,
  valueSelected,
}: SelectProps) => {
  const onChangeOption = (e: ChangeEvent<HTMLSelectElement>) => {
    handleSelectOptionChange(e.target.value);
  };

  return (
    <select
      onChange={onChangeOption}
      className="select-group"
      value={valueSelected}
      defaultValue="default"
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
