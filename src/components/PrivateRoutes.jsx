import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

const PrivateRoutes = () => {
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return <Outlet />;
  }

  // alert('Please login first');
  return <Navigate to='/' />;
};

export default PrivateRoutes;
