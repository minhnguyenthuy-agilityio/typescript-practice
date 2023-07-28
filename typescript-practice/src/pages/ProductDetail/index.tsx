import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProtectedLayout } from '@/layouts';

import { Quantity, Button, Toast, LoadingSpinner } from '@/components';

import { getProductById, updateCart } from '@/services';

import { getPriceWithDiscount } from '@/helpers';

import { useToast, useAuth, useCart } from '@/contexts';

import { Cart, Product } from '@/interfaces';

import './index.css';

const initialState: Product = {
  id: 0,
  name: '',
  price: 0,
  quantity: 0,
  description: '',
  discountPercent: 0,
  image: '',
};

export const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>(initialState);
  const [quantityOrder, setQuantityOrder] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { cart, setCart } = useCart();
  const { userData } = useAuth();
  const { toast, showToast } = useToast();
  const { hasPopup, status, message } = toast;
  const { id, name, quantity, discountPercent, price, image, description } =
    product;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const data = getProductById(Number(productId));

        data && setProduct(data);
      } catch {
        showToast({
          hasPopup: true,
          status: 'success',
          message: 'Error loading data, please reload the page',
        });
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [productId, setLoading]);

  /*
    quantity: existing quantity of product
    hasProductInCart.quantity: quantity of the product added to the cart
    quantityAvailable: the number of products that can be added to the cart
  */
  let quantityAvailable = quantity;
  const hasProductInCart = cart.products.find(
    (item) => item.id === Number(productId)
  );

  if (hasProductInCart) {
    quantityAvailable = quantity - hasProductInCart.quantity;
  }

  const handleAddCart =  () => {
    try {
      let cartUser: Cart = {
        id: '',
        products: [],
      };

      const indexProduct = cart.products.findIndex(
        (item) => item.id === Number(productId)
      );

      setLoading(true);

      // Check order quantity matches the existing product quantity
      if (quantityOrder > quantityAvailable) {
        return showToast({
          hasPopup: true,
          status: 'error',
          message: 'Invalid quantity',
        });
      }

      // If the product already exists in the cart, add the quantity
      if (indexProduct !== undefined && indexProduct >= 0) {
        cart.products[indexProduct].quantity += quantityOrder;
        cartUser = cart;
      }
      // If the product does not exist in the cart, add a new product
      else {
        cartUser = {
          id: userData.id,
          products: [
            ...cart.products,
            {
              id: id,
              quantity: quantityOrder,
              name: name,
              price: getPriceWithDiscount(price, discountPercent),
            },
          ],
        };
      }

      setCart(cartUser);
      updateCart(cartUser);

      showToast({
        hasPopup: true,
        status: 'success',
        message: 'The item has been added to your shopping bag.',
      });
    } catch {
      showToast({
        hasPopup: true,
        status: 'error',
        message: 'Add to cart failed, please try again',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    showToast({ ...toast, hasPopup: false });
  };

  const renderLabel = (quantity: number, discountPercent?: number) => {
    if (!quantity || discountPercent) {
      return (
        <span className="label">
          {quantity === 0 ? 'Sold out' : `- ${discountPercent} %`}
        </span>
      );
    }

    return null;
  };

  return (
    <ProtectedLayout>
      {loading && <LoadingSpinner />}
      <div className="product-main">
        <div className="product">
          <div className="img-wrapper">
            {renderLabel(quantity, discountPercent)}
            <img className="img-product" src={image} alt={name} />
          </div>
          <div className="information">
            <span className="name">{name}</span>
            <span className="price">{`$ ${product?.price?.toFixed(2)}`}</span>
            <span className="quantity-available">{`Quantity : ${quantity}`}</span>
            <p className="description">{description}</p>
            <div className="add-cart">
              <Quantity
                onChangeQuantity={setQuantityOrder}
                isUnavailableProduct={!quantityAvailable}
                maxQuantity={quantity}
              />
              <Button
                type="button"
                onClick={handleAddCart}
                className="btn-primary btn-large"
                isDisabled={!quantityAvailable}
              >
                add to cart
              </Button>
            </div>
          </div>
        </div>
        <div className="product-description">
          <p className="title">Description</p>
          <p className="description">{description}</p>
        </div>
      </div>
      {hasPopup && (
        <Toast status={status} message={message} onClose={handleClose} />
      )}
    </ProtectedLayout>
  );
};
