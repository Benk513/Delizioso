import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import useUserStore from '@/store/useUserStore';

// ProtectedRoute Component
const ProtectedRoute = () => {
    const user = useUserStore()
//   const user = useUserStore((state) => state.user);
//   const token = Cookies.get('jwt');  // Get token from cookie

console.log(user)
  // If there's no token in cookies, or no user in Zustand state, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, allow access to the protected route
  return <Outlet />;
};

export default ProtectedRoute;
