import React from 'react';
import { AppProps } from 'next/app';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useDispatch } from 'react-redux';

import Container from '../components/Container';
import Auth from '../layouts/Auth';
import LoginForm from '../components/LoginForm';
import { login } from '../redux/actions/authAction';

const LoginPage = (props: AppProps) => {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    const { username, password } = values || { username: '', password: '' };
    dispatch(login({ username, password }));
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `SignIn`,
      children: (
        <React.Fragment>
          <div style={{ marginBottom: 16 }} />
          <LoginForm onFinish={onFinish} />
        </React.Fragment>
      ),
    },
    {
      key: '2',
      label: `SignUp`,
      children: (
        <React.Fragment>
          <div style={{ marginBottom: 16 }} />
          <LoginForm onFinish={onFinish} />
        </React.Fragment>
      ),
    },
  ];

  return (
    <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 32,
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          borderRadius: 8,
          marginBottom: 132,
        }}
      >
        <Tabs
          size={'large'}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          centered
        />
      </div>
    </Container>
  );
};
LoginPage.layout = Auth;

export default LoginPage;
