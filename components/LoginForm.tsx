import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { LoginFormProps } from '../types/components';

const LoginForm: React.FC<LoginFormProps> = ({ onFinish }) => {
  const [error, setError] = useState('');
  const onFinishFailed = (errorInfo: any) => {
    setError(errorInfo);
  };
  return (
    <Form
      name="basic"
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        wrapperCol={{ offset: 0, span: 32 }}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          placeholder="Enter your username"
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        wrapperCol={{ offset: 0, span: 32 }}
      >
        <Input.Password
          placeholder="Enter your password"
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <h5 style={{ textAlign: 'end', marginBottom: 8 }}>Forgot password?</h5>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 0, span: 32 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 32 }}>
        <Button type="primary" htmlType="submit" style={{ width: 110 }}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
