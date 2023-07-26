import { useState } from 'react';

import { Input, Button, Select } from '@/components';

import { FieldOrder, DirectionOrder } from '@/interfaces';

import { OptionValue } from '@/constants';

import btnSearch from '@/assets/images/iconButton/btn-search.svg';

import './index.css';

const sortValue: {
  [key in OptionValue]: { field: FieldOrder; direction: DirectionOrder };
} = {
  [OptionValue.NameAsc]: {
    field: 'name',
    direction: 'asc',
  },
  [OptionValue.NameDesc]: {
    field: 'name',
    direction: 'desc',
  },
  [OptionValue.PriceAsc]: {
    field: 'price',
    direction: 'asc',
  },
  [OptionValue.PriceDesc]: {
    field: 'price',
    direction: 'desc',
  },
};

interface SidebarProps {
  onSearch: (value: string) => void;
  onSort: (field: 'name' | 'price', direction: 'asc' | 'desc') => void;
  valueSelected: string;
}

const options = [
  { value: 'default', label: 'sort by' },
  { value: OptionValue.NameAsc, label: 'name (ascending)' },
  { value: OptionValue.NameDesc, label: 'name (descending)' },
  { value: OptionValue.PriceAsc, label: 'price (ascending)' },
  { value: OptionValue.PriceDesc, label: 'price (descending)' },
];

export const Sidebar = ({ onSearch, onSort }: SidebarProps) => {
  const [inputValue, setInputValue] = useState({ keyword: '' });

  const handleInputValue = (value: string) => {
    setInputValue({ keyword: value });
  };

  const handleSearch = () => {
    onSearch(inputValue.keyword);
  };

  // Convert the type of value from string to OptionValue
  const optionValueMapping: { [key: string]: OptionValue } = {
    name_asc: OptionValue.NameAsc,
    name_desc: OptionValue.NameDesc,
    price_asc: OptionValue.PriceAsc,
    price_desc: OptionValue.PriceDesc,
  };

  const handleSort = (value: string) => {
    const { field, direction } = sortValue[optionValueMapping[value]];

    onSort(field, direction);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar title">Shop The Latest</h2>
      <div className="search">
        <Input
          type="text"
          className="input-search"
          placeholder="Search..."
          onChange={handleInputValue}
          onKeyDown={handleSearch}
          name="keyword"
          eventKeyDown="Enter"
        />
        <Button type="button" className="btn-search" onClick={handleSearch}>
          <img src={btnSearch} alt="search button" />
        </Button>
      </div>
      <Select options={options} handleSelectOptionChange={handleSort} />
    </div>
  );
};
