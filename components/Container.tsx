import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}
const style: React.CSSProperties = { display: 'flex', flex: 1, flexDirection: 'column', background: 'white', };

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Container;
