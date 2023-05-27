import React from 'react';
import { Row, Col } from 'antd';
import Container from '../components/Container';
import requireAuth from '../utils/requireAuth';
import Card from '../components/Card';
const DashboardPage: React.FC = () => {
  requireAuth();
  

  return (
    <Container>
      <Row justify="space-around" gutter={[16, 16]} wrap>
        <Col span={6}>
          <Card>
            <h1>Partner</h1>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h1>Campain</h1>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h1>Transaction</h1>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h1>Voucher</h1>
          </Card>
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
