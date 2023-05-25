import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Router = () => {
  const router = useRouter();
  const isAuthenticated = useSelector((state: any) => state?.isLoggedIn);

  const goToHome = () => {
    router.push('/');
  };

  const goToLogin = () => {
    router.push('/login');
  };

  const logout = () => {
    goToLogin();
  };

  const goToDashboard = () => {
    if (isAuthenticated) {
      router.push('/dashboard');
    } else {
      console.log('4444')
      goToLogin();
    }
  };

  return {
    goToHome,
    goToLogin,
    logout,
    goToDashboard,
  };
};

export default Router;
