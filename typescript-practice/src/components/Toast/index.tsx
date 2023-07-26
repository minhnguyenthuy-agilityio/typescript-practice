import { Button } from '@/components';

import { ToastProps } from '@/interfaces';

import closeButton from '@/assets/images/iconButton/btn-close.svg';

import './index.css';

export const Toast = ({ status, message, onClose }: ToastProps) => {
  return (
    <div className="toast">
      <div className={`notification ${status}`}>
        <div className="message">
          <p className="status">{status}</p>
          <p className="content">{message}</p>
        </div>
        <Button onClick={onClose} type="button" className="btn btn-close">
          <img src={closeButton} alt="close" />
        </Button>
      </div>
    </div>
  );
};
