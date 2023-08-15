import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ user }) {
  // const location = window.location.pathname;
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
    // this will pass the current location to the login page
    // so that we can redirect back to the current page after login
  );
}
