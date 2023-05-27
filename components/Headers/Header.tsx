
import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
}

const Header: React.FC<ContainerProps> = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
