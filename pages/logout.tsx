import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';

const LogoutPage: React.FC = () => {
  return (
    <Layout header={null} footer={null}>
      <Container>
        <h1>Trang đăng xuất</h1>
      </Container>
    </Layout>
  );
};

export default LogoutPage;
