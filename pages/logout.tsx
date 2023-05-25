import React from 'react';
import { AppProps } from 'next/app';

import Container from '../components/Container';
import Auth from "../layouts/Auth";

const LogoutPage = (props: AppProps) => {
  return (
      <Container>
        <h1>Trang đăng xuất</h1>
      </Container>
  );
};
LogoutPage.layout = Auth;

export default LogoutPage;
