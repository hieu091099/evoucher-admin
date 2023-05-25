import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Footer: React.FC<ContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Footer;
