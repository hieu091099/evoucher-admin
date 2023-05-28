import React from 'react';
import { Row, Col, Space } from 'antd';
import Container from '../components/Container';
import auth from '../middlewares';

const CampainPage: React.FC = () => {
 
  
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
        <h1>Campain</h1>
      </Row>
    </Container>
  );
};

export default auth(CampainPage);
