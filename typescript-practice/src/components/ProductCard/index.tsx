import { Link } from 'react-router-dom';

import { Product } from '@/interfaces';

import { ROUTES } from '@/constants';

import './index.css';

export const ProductCard = ({
  id,
  quantity,
  discountPercent,
  image,
  name,
  price,
}: Omit<Product, 'description'>) => {
  // Show label if the product is out of stock or has a discount
  const renderLabel = (quantity: number, discountPercent?: number) => {
    if (!quantity || discountPercent) {
      return (
        <span className="product-label">
          {quantity ? `- ${discountPercent}%` : 'Sold out'}
        </span>
      );
    }

    return null;
  };

  return (
    <article className={`product-card ${id}`}>
      {renderLabel(quantity, discountPercent)}
      <Link to={`${ROUTES.PRODUCT_ITEM}${id}`}>
        <div className="img-wrapper">
          <img className="img-product" src={image} alt={name} />
        </div>
        <h4 className="name">{name}</h4>
      </Link>
      <span className="price">{`$ ${price.toFixed(2)}`}</span>
    </article>
  );
};
