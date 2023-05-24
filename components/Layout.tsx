import React from 'react';

const Layout: React.FC = ({ children, header, footer }: any) => {
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default Layout;