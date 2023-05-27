import React from 'react';

import Container from '../components/Container';
import requireAuth from '../utils/requireAuth';

const DashboardPage: React.FC = () => {
  requireAuth();
  return (
    <Container>
      <h1>Trang dashboard</h1>
    </Container>
  );
};

export default DashboardPage;
