import { useEffect, useState } from 'react';

import { Input, Button } from '@/components';

import './index.css';

interface QuantityProps {
  isUnavailableProduct: boolean;
  onChangeQuantity: (value: number) => void;
  maxQuantity: number;
}

export const Quantity = ({
  isUnavailableProduct,
  onChangeQuantity,
  maxQuantity,
}: QuantityProps) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    onChangeQuantity(counter);
  }, [counter, onChangeQuantity]);

  // Update state with incremented value
  const incrementCount = () => {
    if (counter < maxQuantity) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  // Update state with decremented value
  const decrementCount = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const setQuantity = (value: string) => {
    setCounter(Number(value));
  };

  return (
    <div className="quantity-group">
      <Button
        type="button"
        onClick={decrementCount}
        className="btn btn-decrement"
        isDisabled={isUnavailableProduct}
      >
        -
      </Button>
      <Input
        type="number"
        name="quantity"
        className="quantity"
        value={counter.toString()}
        onChange={setQuantity}
        minValue={0}
      />
      <Button
        type="button"
        onClick={incrementCount}
        className="btn btn-decrement"
        isDisabled={isUnavailableProduct}
      >
        +
      </Button>
    </div>
  );
};
