import React from 'react';
import { Row, Col, Space } from 'antd';
import Container from '../components/Container';
import requireAuth from '../utils/requireAuth';

const GamePage: React.FC = () => {
  requireAuth();
  
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

export default GamePage;