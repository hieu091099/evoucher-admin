import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  style: object;
}
const styleCT: React.CSSProperties = { display: 'flex', height: '100%', flexDirection: 'column', background: 'white', };

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <div style={{...styleCT,...style}}>{children}</div>;
};

export default Container;
