import React from 'react';
import { AppProps } from 'next/app';

import Container from '../components/Container';
import Auth from "../layouts/Auth";

const RegisterPage = (props: AppProps) => {
  return (
      <Container>
        <h1>Trang Đăng ký</h1>
      </Container>
  );
};
RegisterPage.layout = Auth;
export default RegisterPage;
