import React, { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from 'src/store';

interface RequireAuthProps {
    redirectTo?: string;
    children: ReactNode;
  }
  

export const RequireAuth = ({ redirectTo = '/logIn', children }: RequireAuthProps) => {
  const isAuth = useSelector((state: RootState) => state.user.token);
  const isAppInited = useSelector((state: RootState) => state.app.isInited);
  const location = useLocation();
  const navigateTo = useMemo(() => {
    if (!isAuth) return redirectTo;
  }, [isAuth, redirectTo]);

  if (!isAppInited) return null;

  if (navigateTo) return <Navigate to={navigateTo} replace state={{ from: location }} />;
  return children;
};