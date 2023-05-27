// layouts/AdminLayout.tsx
import React, { useState } from 'react';
import requireAuth from '../utils/requireAuth';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Tooltip, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const { Header, Sider, Content } = Layout;
import { logout } from '../redux/actions/authAction';

interface ContainerProps {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}
const AdminLayout: React.FC<ContainerProps> = ({ children }) => {
  requireAuth();
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleOnClickLogout = (e: React.MouseEvent) => {
    dispatch(logout())
  }
  return (
    <React.Fragment>
      <Header style={{ padding: 0 }}>
        <Row>
          <Col span={12}>
            <h4 style={{ color: 'white' }}>logo</h4>
          </Col>
          <Col
            span={12}
            style={{
              textAlign: 'right',
              paddingRight: 16
            }}
          >
            <Tooltip title="logout">
              <Button onClick={handleOnClickLogout} type="primary" danger shape="circle" icon={<LogoutOutlined />} />
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
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
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
