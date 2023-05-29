'use client';

import React, { useLayoutEffect } from 'react';
import { Row, Col } from 'antd';
import Container from '../components/Container';
import { useSelector } from 'react-redux';
import authMiddleware from '../middlewares';
import Card from '../components/Card';
import { color } from '@/utils/colors';
import API from '@/utils/api';
import { axiosGet } from '@/utils/axios';
import { useDispatch } from 'react-redux';
import {
  get_list_partner,
  get_list_voucher,
  get_list_campain,
  get_list_transaction,
  get_list_game,
  get_list_user,
} from '@/redux/actions/appAction';
import Highcharts from '@/components/HighCharts';
import {
  UsergroupAddOutlined,
  TransactionOutlined,
  MoneyCollectOutlined,
  FlagOutlined,
} from '@ant-design/icons';

const DashboardPage: React.FC = () => {
  const { vouchers, partners, campains, transactions } = useSelector(
    (state: any) => state.app
  );
  const dispatch = useDispatch();
  const fetchVouchers = async () => {
    const res = await axiosGet(API.VOUCHERS);
    if (res?.success) {
      dispatch(get_list_voucher(res?.data));
    }
  };

  const fetchPartners = async () => {
    const res = await axiosGet(API.PARTNERS);
    if (res?.success) {
      dispatch(get_list_partner(res?.data));
    }
  };

  const fetchCampains = async () => {
    const res = await axiosGet(API.CAMPAINS);
    if (res?.success) {
      dispatch(get_list_campain(res?.data));
    }
  };

  const fetchTransactions = async () => {
    const res = await axiosGet(API.TRANSACTIONS);
    if (res?.success) {
      dispatch(get_list_transaction(res?.data));
    }
  };

  const fetchUsers = async () => {
    const res = await axiosGet(API.USERS);
    if (res?.success) {
      dispatch(get_list_user(res?.data));
    }
  };

  const fetchGames = async () => {
    const res = await axiosGet(API.GAMES);
    if (res?.success) {
      dispatch(get_list_game(res?.data));
    }
  };

  useLayoutEffect(() => {
    fetchVouchers();
    fetchPartners();
    fetchCampains();
    fetchTransactions();
    fetchUsers();
    fetchGames();
  }, []);
  const styleCard: React.CSSProperties = {
    padding: 16,
    background: 'white',
    marginTop: 24,
    borderRadius: 10,
  };
  return (
    <Container>
      <Row justify="space-around" gutter={[16, 16]} wrap>
        <Col span={6}>
          <Card>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: 12 }}>
                <UsergroupAddOutlined
                  style={{ fontSize: 55, color: color.Green7 }}
                />
              </div>
              <div>
                <h1 style={{ marginBottom: 8 }}>Partner</h1>
                <h4>{partners.length}</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: 12 }}>
                <FlagOutlined style={{ fontSize: 55, color: color.Blue4 }} />
              </div>
              <div>
                <h1 style={{ marginBottom: 8 }}>Campain</h1>
                <h4>{campains.length}</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: 12 }}>
                <TransactionOutlined
                  style={{ fontSize: 55, color: color.Yellow4 }}
                />
              </div>
              <div>
                <h1 style={{ marginBottom: 8 }}>Transaction</h1>
                <h4>{transactions.length}</h4>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: 12 }}>
                <MoneyCollectOutlined
                  style={{ fontSize: 55, color: color.Yellow7 }}
                />
              </div>
              <div>
                <h1 style={{ marginBottom: 8 }}>Voucher</h1>
                <h4>{vouchers.length}</h4>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row justify="space-between" gutter={[8, 8]}>
        <Col style={styleCard} span={12}>
          <Highcharts
            title={'Partners'}
            style={{ style: { height: '100%' } }}
          />
        </Col>
        <Col style={styleCard} span={12}>
          <Highcharts
            title={'Campains'}
            style={{ style: { height: '100%' } }}
          />
        </Col>
        <Col style={styleCard} span={12}>
          <Highcharts
            title={'Partners'}
            style={{ style: { height: '100%' } }}
          />
        </Col>
        <Col style={styleCard} span={12}>
          <Highcharts
            title={'Vouchers'}
            style={{ style: { height: '100%' } }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default authMiddleware(DashboardPage);
