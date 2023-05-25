import React from 'react';
import Container from "../components/Container";
import Layout from "../components/Layout";

const LoginPage: React.FC = () => {
  return (
    <Layout header={null} footer={null}>
      <Container>
        <h1>Trang đăng nhập</h1>
      </Container>
    </Layout>
  );
};

export default LoginPage;
