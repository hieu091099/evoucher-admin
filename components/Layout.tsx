import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

interface ContainerProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}
const Layout: React.FC<ContainerProps> = ({
  children,
  header,
  footer,
}) => {
  const isAuthenticated = useSelector(
    (state: any) => state.isLoggedIn
  );
  const router = useRouter();

  if (!isAuthenticated) {
    router.push('/login');
  }

  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default Layout;

