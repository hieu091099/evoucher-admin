'use client'

import React from 'react';
import { Row } from 'antd';
interface ContainerProps {
  children: React.ReactNode;
  style?: object;
}
const styleCT: React.CSSProperties = { display: 'flex', height: '100%', flexDirection: 'column', background: '#F5F5F5', };

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return <div style={{...styleCT,...style}}>{children}</div>;
};

export default Container;
