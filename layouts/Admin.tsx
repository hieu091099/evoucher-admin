// layouts/AdminLayout.tsx
import React, { useState } from 'react';
import requireAuth from '../utils/requireAuth';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  AudioOutlined,
  BarChartOutlined,
  PlaySquareOutlined,
  UsergroupAddOutlined,
  TransactionOutlined,
  MoneyCollectOutlined,
  FlagOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';

import { Layout, Menu, Button, theme, Tooltip, Row, Col, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const { Header, Sider, Content } = Layout;
const { Search } = Input;
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
  const dispatch = useDispatch();

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const handleOnClickLogout = (e: React.MouseEvent) => {
    dispatch(logout());
  };

  const onSearch = (value: string) => console.log(value);
  const onSelect = (value: any) => {
    console.log(value)
    if(value.key === '1') {
      router.push('/dashboard')
      return null;
    }
    if(value.key === '2') {
      router.push('/users')
      return null;
    }
    if(value.key === '3') {
      router.push('/partners')
      return null;
    }
    if(value.key === '4') {
      router.push('/games')
      return null;
    }
    if(value.key === '5') {
      router.push('/transactions')
      return null;
    }
    if(value.key === '6') {
      router.push('/vouchers')
      return null;
    }
    if(value.key === '7') {
      router.push('/campains')
      return null;
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
            defaultSelectedKeys={['1']}
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
              <Col span={12} style={{display:'flex', alignItems: 'center'}}>
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
