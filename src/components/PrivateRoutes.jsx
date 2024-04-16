import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const PrivateRoutes = () => {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
