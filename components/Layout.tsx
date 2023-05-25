import React from 'react';
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
  

  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default Layout;

