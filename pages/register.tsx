'use client'

import React from 'react';
import { AppProps } from 'next/app';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useDispatch } from 'react-redux';

import Container from '../components/Container';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = (props: AppProps) => {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    const { username, password } = values || { username: '', password: '' };
    // dispatch(login({ username, password }));
  };

  const onChange = (key: string) => {
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Register`,
      children: (
        <React.Fragment>
          <div style={{ marginBottom: 16 }} />
          <RegisterForm onFinish={onFinish} />
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
          defaultActiveKey="2"
          items={items}
          onChange={onChange}
          centered
        />
      </div>
    </Container>
  );
};

export default RegisterPage;
