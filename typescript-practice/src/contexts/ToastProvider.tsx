import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import { Toast } from '@/interfaces';

interface ToastContextData {
  toast: Toast;
  showToast: (newToast: Toast) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const useToast = (): ToastContextData => useContext(ToastContext);

const initialToast: Toast = {
  status: '',
  message: '',
  hasPopup: false,
};

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<Toast>(initialToast);

  const showToast = (newToast: Toast) => {
    setToast(newToast);
    setTimeout(() => {
      setToast((prevToast) => ({ ...prevToast, hasPopup: false }));
    }, 1000);
  };

  const valueContext = useMemo(
    () => ({
      toast,
      showToast,
    }),
    [toast]
  );

  return (
    <ToastContext.Provider value={valueContext}>
      {children}
    </ToastContext.Provider>
  );
};

export { useToast, ToastProvider };
