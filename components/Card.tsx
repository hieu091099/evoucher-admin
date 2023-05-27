import React from 'react';

import { CardProps } from '../types/components';
const Card: React.FC<CardProps> = ({ children, style }) => {
  const styleCT: React.CSSProperties = {
    padding: 20,
    height: 91,
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    width: '100%',
  };

  return <div style={{...styleCT, ...style}}>{children}</div>;
};

export default Card;
