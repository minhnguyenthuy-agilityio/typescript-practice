export interface Toast {
  status: string;
  message: string;
  hasPopup: boolean;
}

export interface ToastProps extends Omit<Toast, 'hasPopup'> {
  onClose: () => void;
}
