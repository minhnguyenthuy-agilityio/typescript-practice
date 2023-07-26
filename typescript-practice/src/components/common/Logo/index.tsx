import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants';

import './index.css';

export const Logo = () => (
  <Link to={ROUTES.HOMEPAGE}>
    <h1 className="logo">
      <span>s</span>hoppe
    </h1>
  </Link>
);
