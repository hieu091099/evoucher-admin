import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Row } from 'antd';
import dayjs from 'dayjs';
import {
  LockOutlined,
  UserOutlined,
  MailFilled,
  PhoneOutlined,
} from '@ant-design/icons';

import { RegisterFormProps } from '../types/components';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const RegisterForm: React.FC<RegisterFormProps> = ({ onFinish }) => {
  const [error, setError] = useState('');
  const dateFormat = 'DD/MM/YYYY';

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
          style={{ width: '100%' }}
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
          style={{ width: '100%' }}
          placeholder="Enter your password"
          prefix={<LockOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        wrapperCol={{ offset: 0, span: 32 }}
      >
        <Input
          style={{ width: '100%' }}
          placeholder="Enter your email"
          prefix={<MailFilled className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item
        name="birthday"
        rules={[{ required: true, message: 'Please input your birthday!' }]}
        wrapperCol={{ offset: 0, span: 32 }}
      >
        <DatePicker
          style={{ width: '100%' }}
          defaultValue={dayjs('01/01/2023', dateFormat)}
          format={dateFormat}
        />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[{ required: true, message: 'Please input your phone!' }]}
        wrapperCol={{ offset: 0, span: 32 }}
      >
        <Input
          style={{ width: '100%' }}
          placeholder="Enter your phone"
          prefix={<PhoneOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 32 }}>
        <Button type="primary" htmlType="submit" style={{ width: 110 }}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
