import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';

import { ROUTES } from '@/constants';

import { useAuth } from '@/contexts';

import userIcon from '@/assets/images/user-icon.svg';
import closeButton from '@/assets/images/iconButton/btn-close.svg';

import './index.css';

interface UserCardProps {
  onCloseUserCard: () => void;
}

export const UserCard = ({ onCloseUserCard }: UserCardProps) => {
  const { userData, handleLogout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="user-card">
      <div className="user-information">
        <div className="main">
          <img className="user-icon" src={userIcon} alt="user" />
          <p className="user-name">{userData.name}</p>
          <p className="user-email">{userData.email}</p>
          <Button type="button" className="btn-logout" onClick={onLogout}>
            Logout
          </Button>
          <Button
            onClick={onCloseUserCard}
            type="button"
            className="btn btn-close"
          >
            <img src={closeButton} alt="close" />
          </Button>
        </div>
      </div>
    </div>
  );
};
