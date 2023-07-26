import { Link } from 'react-router-dom';

import { Navigation, Input, Button } from '@/components';

import { ROUTES } from '@/constants';

import arrowButton from '@/assets/images/iconButton/btn-arrow.svg';
import linkedin from '@/assets/images/socialLogo/linkedin.svg';
import instagram from '@/assets/images/socialLogo/instagram.svg';
import twitter from '@/assets/images/socialLogo/twitter.svg';
import facebook from '@/assets/images/socialLogo/facebook.svg';

import './index.css';

const socialList = [
  {
    name: 'linkedin',
    image: linkedin,
  },
  {
    name: 'facebook',
    image: facebook,
  },
  {
    name: 'instagram',
    image: instagram,
  },
  {
    name: 'twitter',
    image: twitter,
  },
];

export const Footer = () => (
  <footer className="footer-wrapper">
    <div className="footer-action">
      <Navigation />
      <p>
        <span>© 2021 Shelly</span>. Terms of use
        <span> and </span>
        privacy policy.
      </p>
    </div>
    <div className="footer-social">
      <div className="email">
        <Input
          type="email"
          name="email"
          className="input-email"
          placeholder="Give an email, get the newsletter."
        />
        <Button className="btn-arrow" type="button">
          <img src={arrowButton} alt="arrow button" />
        </Button>
      </div>
      <div className="icon">
        <ul className="list">
          {socialList.map((social) => (
            <li className="item" key={social.name}>
              <Link to={ROUTES.HOMEPAGE}>
                <img src={social.image} alt={social.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);
