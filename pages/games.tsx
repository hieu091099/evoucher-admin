'use client'

import React from 'react';
import { Row, Col, Space } from 'antd';
import Container from '../components/Container';
import authMiddleware from '../middlewares';

const GamePage: React.FC = () => {

  
  return (
    <Container>
      <Row
        style={{
          padding: 16,
          background: 'white',
          height: '100%',
          marginTop: 24,
          borderRadius: 10,
        }}
      >
        <h1>games</h1>
      </Row>
    </Container>
  );
};

export default authMiddleware(GamePage);
