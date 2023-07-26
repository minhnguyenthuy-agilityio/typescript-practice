import { useState } from 'react';

import { Logo, Button, CartSideBar, UserCard } from '@/components';

import { useCart } from '@/contexts';

import userIcon from '@/assets/images/user-icon.svg';
import cartButton from '@/assets/images/iconButton/btn-cart.svg';

import './index.css';

interface HeaderProps {
  setStatusOpen: (statusOpen: {
    isOpenCart: boolean;
    isOpenUserCard: boolean;
  }) => void;
}

export const Header = ({ setStatusOpen }: HeaderProps) => {
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
  const [isOpenUserCard, setIsOpenUserCard] = useState<boolean>(false);
  const { cart } = useCart();

  const handleToggleUserCard = () => {
    setIsOpenUserCard(!isOpenUserCard);
    setStatusOpen({ isOpenUserCard: !isOpenUserCard, isOpenCart });
  };

  const handleToggleCart = () => {
    setIsOpenCart(!isOpenCart);
    setStatusOpen({ isOpenCart: !isOpenCart, isOpenUserCard });
  };

  return (
    <header className="header-wrapper">
      <Logo />
      <div className="user">
        <div className="cart">
          <Button type="button" className="btn-cart" onClick={handleToggleCart}>
            <img src={cartButton} alt="cart" />
          </Button>
          <span className="quantity-cart">{cart.products.length}</span>
        </div>
        <Button
          type="button"
          className="btn-user"
          onClick={handleToggleUserCard}
        >
          <img src={userIcon} alt="user" />
        </Button>
      </div>
      {isOpenCart && <CartSideBar onCloseCart={handleToggleCart} />}
      {isOpenUserCard && <UserCard onCloseUserCard={handleToggleUserCard} />}
    </header>
  );
};
