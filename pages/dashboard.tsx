import React from 'react';
import { Row, Col, Space } from 'antd';
import Container from '../components/Container';
import requireAuth from '../utils/requireAuth';

const DashboardPage: React.FC = () => {
  const styleCT: React.CSSProperties = {
    padding: 20,
    height: 91,
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    width: '100%',
  };

  requireAuth();
  return (
    <Container>
      <Row justify="space-around" gutter={[16, 16]}>
        <Col span={6}>
          <div style={styleCT}>
            <h1>Partner</h1>
          </div>
        </Col>
        <Col span={6}>
          <div style={styleCT}>
            <h1>Campain</h1>
          </div>
        </Col>
        <Col span={6}>
          <div style={styleCT}>
            <h1>Transaction</h1>
          </div>
        </Col>
        <Col span={6}>
          <div style={styleCT}>
            <h1>Voucher</h1>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          padding: 16,
          background: 'white',
          height: '79%',
          marginTop: 24,
          borderRadius: 10,
        }}
      >
        <h1>Trang dashboard</h1>
      </Row>
    </Container>
  );
};

export default DashboardPage;
