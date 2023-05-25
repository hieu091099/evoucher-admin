
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Header: React.FC<ContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Header;
