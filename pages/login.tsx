import React from 'react';
import { AppProps } from 'next/app';
import { Col, Row } from 'antd';

import Container from '../components/Container';
import Auth from '../layouts/Auth';
import LoginForm from '../components/LoginForm';
const style: React.CSSProperties = { background: 'white', padding: '8px 0' };

const LoginPage = (props: AppProps) => {
  return (
    <Container>
      <Row>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};
LoginPage.layout = Auth;

export default LoginPage;
