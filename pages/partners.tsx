'use client'

import React from 'react';
import { Row, Col, Space } from 'antd';
import Container from '../components/Container';
import authMiddleware from '../middlewares';

const PartnerPage: React.FC = () => {
  
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
        <h1>Partner</h1>
      </Row>
    </Container>
  );
};

export default authMiddleware(PartnerPage);
