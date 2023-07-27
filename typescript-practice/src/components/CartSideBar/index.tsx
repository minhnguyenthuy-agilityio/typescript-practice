import { useState } from 'react';

import { Button, CartItem, Toast, LoadingSpinner } from '@/components';

import { useCart, useToast, useAuth } from '@/contexts';

import { updateCart } from '@/services';

import closeButton from '@/assets/images/iconButton/btn-close.svg';

import './index.css';

interface CartSideBarProps {
  onCloseCart: () => void;
}

export const CartSideBar = ({ onCloseCart }: CartSideBarProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { cart, setCart } = useCart();
  const { userData } = useAuth();
  const { toast, showToast } = useToast();
  const { hasPopup, status, message } = toast;

  const handleDeleteCartItem = (idSelected: number) => {
    try {
      setLoading(true);

      const filteredCarts = cart.products.filter(
        (cartItem) => cartItem.id !== idSelected
      );

      const cartUser = {
        id: userData.id,
        products: filteredCarts,
      };

      setCart(cartUser);
      updateCart(cartUser);

      showToast({
        hasPopup: true,
        status: 'success',
        message: 'The item removed from your shopping bag',
      });
    } catch {
      showToast({
        hasPopup: true,
        status: 'error',
        message: 'Remove from cart failed, please try again',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    showToast({ ...toast, hasPopup: false });
  };

  const calculateTotalBill = () => {
    let totalBill = 0;

    cart.products.forEach((item) => {
      const totalItem = Number(item.price) * item.quantity;

      totalBill += totalItem;
    });

    return totalBill.toFixed(2);
  };

  return (
    <aside className="cart-bar">
      {loading && <LoadingSpinner />}
      <div className="main">
        <div>
          <div className="header">
            <h2 className="title">Shopping bag</h2>
            <Button
              onClick={onCloseCart}
              type="button"
              className="btn btn-close"
            >
              <img src={closeButton} alt="close button" />
            </Button>
          </div>
          <div className="list-cart-item">
            {cart.products.map(({ id, name, quantity, price }) => (
              <CartItem
                key={id}
                id={id}
                name={name}
                quantity={quantity}
                price={price}
                onDelete={handleDeleteCartItem}
              />
            ))}
          </div>
        </div>
        <div className="footer">
          <p className="total">{`Total: $ ${calculateTotalBill()}`}</p>
        </div>
      </div>
      {hasPopup && (
        <Toast status={status} message={message} onClose={handleClose} />
      )}
    </aside>
  );
};
