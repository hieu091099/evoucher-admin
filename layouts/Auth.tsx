// layouts/AuthLayout.tsx
import React from 'react';
interface ContainerProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}
const AuthLayout: React.FC<ContainerProps> = ({ children }) => {
  return (
    <React.Fragment>
      {/* <header>Auth Header</header> */}
      <main style={{height: '100%'}}>{children}</main>
      {/* <footer>Auth Footer</footer> */}
    </React.Fragment>
  );
};

export default AuthLayout;
