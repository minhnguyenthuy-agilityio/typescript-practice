import { Routes, Route } from 'react-router-dom';

import { SignUpPage, LoginPage, HomePage, ProductDetail } from '@/pages';

import { ROUTES } from '@/constants';

const Routing = () => (
  <Routes>
    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
    <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
    <Route path={ROUTES.PRODUCT} element={<ProductDetail />} />
  </Routes>
);

export default Routing;
