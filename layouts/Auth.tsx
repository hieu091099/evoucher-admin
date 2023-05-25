// layouts/AuthLayout.tsx
import React from 'react';
interface ContainerProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}
const AuthLayout: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div>
      {/* <header>Auth Header</header> */}
      <main>{children}</main>
      {/* <footer>Auth Footer</footer> */}
    </div>
  );
};

export default AuthLayout;
