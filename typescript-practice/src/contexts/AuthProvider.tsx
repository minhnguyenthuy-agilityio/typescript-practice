import {
  SetStateAction,
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ERROR_MESSAGES } from '@/constants';

import { getUserById } from '@/services';

import { useToast } from '@/contexts';

import { User } from '@/interfaces';

import { Toast } from '@/components';

interface AuthContextData {
  userData: User;
  setUserData: Dispatch<SetStateAction<User>>;
  handleLogout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = (): AuthContextData => useContext(AuthContext);

const initialState: User = {
  id: localStorage.getItem('auth') || '',
  name: '',
  email: '',
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userData, setUserData] = useState<User>(initialState);
  const { toast, showToast } = useToast();
  const userId = userData.id;
  const { hasPopup, message, status } = toast;

  useEffect(() => {
    const getData = async () => {
      try {
        if (userId) {
          const data = getUserById(userId);
          if (data) {
            const user: User = {
              id: userId,
              name: data.name,
              email: data.email,
            };
            setUserData(user);
          }
        }
      } catch (error) {
        showToast({
          hasPopup: true,
          status: 'error',
          message: ERROR_MESSAGES.FETCH_API_FAIL,
        });
        setUserData(initialState);
      }
    };

    getData();
  }, [userId]);

  const handleClose = () => {
    showToast({ ...toast, hasPopup: false });
  };

  const handleLogout = () => {
    const user: User = {
      id: '',
      name: '',
      email: '',
    };
    setUserData(user);
    localStorage.removeItem('auth');
  };

  const valueContext = useMemo<AuthContextData>(
    () => ({
      userData,
      setUserData,
      handleLogout,
    }),
    [userId]
  );

  return (
    <AuthContext.Provider value={valueContext}>
      {hasPopup && (
        <Toast status={status} message={message} onClose={handleClose} />
      )}
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
