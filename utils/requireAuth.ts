// Trong tệp utils/requireAuth.js
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const requireAuth = (wrappedComponent: any) => {
  const Wrapper = () => {
    const router = useRouter();
    const isAuthenticated = useSelector((state: any) => state.auth.isLoggedIn);
    if (!isAuthenticated) {
      router.push('/login');
      return null;
    }
    return wrappedComponent;
  };

  return Wrapper;
};

export default requireAuth;
