// layouts/AdminLayout.tsx
import React, { useState, useEffect } from 'react';
import requireAuth from '../utils/requireAuth';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  BarChartOutlined,
  PlaySquareOutlined,
  UsergroupAddOutlined,
  TransactionOutlined,
  MoneyCollectOutlined,
  FlagOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';

import { Layout, Menu, Button, theme, Tooltip, Row, Col, Input } from 'antd';
import { useDispatch } from 'react-redux';

const { Header, Sider, Content } = Layout;
import { logout } from '../redux/actions/authAction';

interface ContainerProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}
const AdminLayout: React.FC<ContainerProps> = ({ children }) => {
  requireAuth();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  let defaultSelectedKeys = ['1']
  if(router.pathname.includes('dashboard')) {
    defaultSelectedKeys = ['1']
  }
  if(router.pathname.includes('users')) {
    defaultSelectedKeys = ['2']
  }
  if(router.pathname.includes('partners')) {
    defaultSelectedKeys = ['3']
  }
  if(router.pathname.includes('games')) {
    defaultSelectedKeys = ['4']
  }
  if(router.pathname.includes('transactions')) {
    defaultSelectedKeys = ['5']
  }
  if(router.pathname.includes('vouchers')) {
    defaultSelectedKeys = ['6']
  }
  if(router.pathname.includes('campains')) {
    defaultSelectedKeys = ['7']
  }

  const dispatch = useDispatch();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleOnClickLogout = (e: React.MouseEvent) => {
    dispatch(logout());
  };

  const onSelect = (value: any) => {
    switch (value.key) {
      case '1':
        router.push('/dashboard');
        return;
      case '2':
        router.push('/users');
        return;
      case '3':
        router.push('/partners');
        return;
      case '4':
        router.push('/games');
        return;
      case '5':
        router.push('/transactions');
        return;
      case '6':
        router.push('/vouchers');
        return;
      case '7':
        router.push('/campains');
        return;
      default:
        router.push('/dashboard');
        return;
    }
  };

  return (
    <React.Fragment>
      <Header style={{ padding: 0 }}>
        <Row>
          <Col span={12}>
            <h2 style={{ color: 'white', marginLeft: 32 }}>Evoucher</h2>
          </Col>
          <Col
            span={12}
            style={{
              textAlign: 'right',
              paddingRight: 16,
            }}
          >
            <Tooltip title="logout">
              <Button
                onClick={handleOnClickLogout}
                type="primary"
                danger
                shape="circle"
                icon={<LogoutOutlined />}
              />
            </Tooltip>
          </Col>
        </Row>
      </Header>
      <Layout style={{ height: '100%' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={defaultSelectedKeys}
            onSelect={onSelect}
            items={[
              {
                key: '1',
                icon: <BarChartOutlined />,
                label: 'Dashboard',
              },
              {
                key: '2',
                icon: <UserOutlined />,
                label: 'Manage User',
              },
              {
                key: '3',
                icon: <UsergroupAddOutlined />,
                label: 'Manage Partner',
              },
              {
                key: '4',
                icon: <PlaySquareOutlined />,
                label: 'Manage Game',
              },
              {
                key: '5',
                icon: <TransactionOutlined />,
                label: 'Manage Transaction',
              },
              {
                key: '6',
                icon: <MoneyCollectOutlined />,
                label: 'Manage Voucher',
              },
              {
                key: '7',
                icon: <FlagOutlined />,
                label: 'Manage Campain',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Row>
              <Col span={12}>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </Col>
              <Col span={12} style={{ display: 'flex', alignItems: 'center' }}>
                {/* <Search
                  placeholder="input search text"
                  enterButton="Search"
                  size="large"
                  suffix={suffix}
                  onSearch={onSearch}
                  style={{ width: '100%', paddingRight: 16 }}
                /> */}
              </Col>
            </Row>
          </Header>
          <Content
            style={{
              padding: 24,
              minHeight: 280,
              background: '#F5F5F5',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AdminLayout;
