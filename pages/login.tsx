'use client'

import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Container from '../components/Container';
import LoginForm from '../components/LoginForm';
import { login } from '../redux/actions/authAction';

const LoginPage = (props: AppProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const onFinish = (values: any) => {
    const { username, password } = values || { username: '', password: '' };
    dispatch(login({ username, password }));
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `ADMIN`,
      children: (
        <React.Fragment>
          <div style={{ marginBottom: 16, marginTop: 32 }} />
          <LoginForm onFinish={onFinish} />
        </React.Fragment>
      ),
    },
  ];

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard');
    }
  }, [isLoggedIn]);

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
          maxHeight: 488,
        }}
      >
        <Tabs size={'large'} defaultActiveKey="1" items={items} centered />
      </div>
    </Container>
  );
};

export default LoginPage;
