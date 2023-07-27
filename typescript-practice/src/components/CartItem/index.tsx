import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants';

import { Button } from '@/components';

import closeButton from '@/assets/images/iconButton/btn-close.svg';

import './index.css';

interface CartItemProps {
  id: number;
  name: string;
  quantity: number;
  price: number;
  onDelete: (idSelected: number) => void;
}

export const CartItem = ({
  id,
  name,
  quantity,
  price,
  onDelete,
}: CartItemProps) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <article className="cart-item" data-id={id}>
      <Link to={`${ROUTES.PRODUCT_ITEM}${id}`}>
        <h4 className="name">{name}</h4>
      </Link>
      <p className="quantity">{`Quantity: ${quantity}`}</p>
      <p className="price">{`$ ${price.toFixed(2)}`}</p>
      <Button onClick={handleDelete} type="button" className="btn btn-delete">
        <img src={closeButton} alt="close" />
      </Button>
    </article>
  );
};
