import { ReactNode, useEffect, useState } from 'react';

import { Header, Footer } from '@/layouts';

import './index.css';

interface DefaultLayoutProps {
  children: ReactNode;
}

interface StatusOpen {
  isOpenCart: boolean;
  isOpenUserCard: boolean;
}

const statusDefault = {
  isOpenCart: false,
  isOpenUserCard: false,
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [statusOpen, setStatusOpen] = useState<StatusOpen>(statusDefault);

  useEffect(() => {
    // Disable main page if cart is open (include scroll page)
    const updatePageScroll = () => {
      if (statusOpen.isOpenCart || statusOpen.isOpenUserCard) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    updatePageScroll();
  }, [statusOpen.isOpenCart, statusOpen.isOpenUserCard]);

  return (
    <div className="container">
      <Header setStatusOpen={setStatusOpen} />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};
