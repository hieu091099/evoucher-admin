import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
}

const Footer: React.FC<ContainerProps> = ({ children }) => {
  return <footer>{children}</footer>;
};

export default Footer;
