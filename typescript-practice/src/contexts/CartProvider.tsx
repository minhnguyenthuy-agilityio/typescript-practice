import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ERROR_MESSAGES } from '@/constants';

import { getCartByUserId } from '@/services';

import { useAuth, useToast } from '@/contexts';

import { Cart } from '@/interfaces';

import { Toast } from '@/components';

interface CartContextProps {
  cart: Cart;
  setCart: Dispatch<SetStateAction<Cart>>;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

const useCart = (): CartContextProps => useContext(CartContext);

const initialState: Cart = {
  id: '',
  products: [],
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart>(initialState);
  const { toast, showToast } = useToast();
  const { userData } = useAuth();
  const userId = userData.id;
  const { hasPopup, message, status } = toast;

  useEffect(() => {
    const getData = async () => {
      try {
        if (userId) {
          const dataCart = await getCartByUserId(userId);
          setCart(dataCart);
        }
      } catch (error) {
        showToast({
          hasPopup: true,
          status: 'error',
          message: ERROR_MESSAGES.FETCH_API_FAIL,
        });
        setCart(initialState);
      }
    };

    getData();
  }, [userId]);

  const handleClose = () => {
    showToast({ ...toast, hasPopup: false });
  };

  const valueContext = useMemo(
    () => ({
      cart,
      setCart,
    }),
    [cart]
  );

  return (
    <CartContext.Provider value={valueContext}>
      {hasPopup && (
        <Toast status={status} message={message} onClose={handleClose} />
      )}
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
