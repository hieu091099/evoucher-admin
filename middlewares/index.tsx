/* eslint-disable react/display-name */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const authMiddleware = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const isAuthenticated = useSelector((state: any) => state.auth.isLoggedIn);
    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login'); // Chuyển hướng nếu chưa xác thực
      }
    }, [isAuthenticated, router]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default authMiddleware;
