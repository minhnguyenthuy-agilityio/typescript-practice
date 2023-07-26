import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/contexts';

import { ROUTES } from '@/constants';

import { DefaultLayout } from '@/layouts';

interface ProtectedLayoutProps {
  children: ReactNode;
}

export const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const { userData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.id) {
      navigate(ROUTES.LOGIN);
    }
  }, [userData.id, navigate]);

  return <DefaultLayout>{children}</DefaultLayout>;
};
