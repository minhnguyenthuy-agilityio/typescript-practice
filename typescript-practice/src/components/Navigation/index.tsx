import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants';

import './index.css';

const navlist = ['contact', 'terms of services', 'shipping and returns'];

export const Navigation = () => (
  <nav className="navigation">
    <ul className="nav-list">
      {navlist.map((nav) => (
        <li key={nav} className="nav-item">
          <Link to={ROUTES.HOMEPAGE}>{nav.toUpperCase()}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
