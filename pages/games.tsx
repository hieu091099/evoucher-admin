'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Button, Table, Modal, Form, Input } from 'antd';
import {
  BuildOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Container from '../components/Container';
import authMiddleware from '../middlewares';
import type { ColumnsType } from 'antd/es/table';
import HeaderBody from '@/components/HeaderBody';
import useModal from '@/hooks/useModal';
import { axiosDelete, axiosGet, axiosPost, axiosPut } from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  game_create,
  game_update,
  game_delete,
  get_list_game,
} from '../redux/actions/appAction';
import API from '../utils/api';

interface DataType {
  key: React.Key;
  id: React.Key;
  username: string;
  password: string;
  email: string;
  phone: string;
  address: string;
}
const GamePage: React.FC = () => {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState('');
  const games = useSelector((state: any) => state.app.games);
  const {
    form,
    isShowModal,
    dataModal,
    setDataModal,
    title,
    setModalEdit,
    setModalCreate,
    setModalDelete,
    setModalHide,
  } = useModal();

  const columns: ColumnsType<DataType> = [
    {
      title: 'id',
      width: 200,
      dataIndex: '_id',
      key: '0',
      fixed: 'left',
    },
    {
      title: 'name',
      width: 200,
      dataIndex: 'name',
      key: '1',
      fixed: 'left',
    },
    {
      title: 'type',
      dataIndex: 'type',
      key: '2',
      width: 200,
    },
    {
      title: 'campaign',
      dataIndex: 'campaign',
      key: '3',
      width: 200,
    },

    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 200,
      render: (e) => (
        <React.Fragment>
          <Button type="primary" ghost onClick={handleEdit(e)}>
            Edit
          </Button>
          <Button danger style={{ marginLeft: 8 }} onClick={handleDelete(e)}>
            Delete
          </Button>
        </React.Fragment>
      ),
    },
  ];

  const handleOnClick = () => {
    form?.resetFields();
    setModalCreate();
  };

  const handleOnSearch = (value: any) => {
    setSearchItem(value);
  };
  const handleCancel = () => {
    setModalHide();
  };

  const fetchListGame = async () => {
    const res = await axiosGet(API.GAMES);
    if (res?.success) {
      dispatch(get_list_game(res?.data));
    }
  };

  const createGame = async (formData: any) => {
    const res = await axiosPost(API.GAMES, {
      ...formData,
    });
    if (res?.success) {
      dispatch(game_create(res?.data));
    }
  };

  const editGame = async (formData: any) => {
    const res = await axiosPut(API.GAMES_UPDATE(formData?._id), {
      ...formData,
    });
    if (res?.success) {
      dispatch(game_update(res?.data));
    }
  };

  const deleteGame = async (formData: any) => {
    const res = await axiosDelete(API.GAMES_DELETE(formData?._id));
    if (res?.success) {
      dispatch(game_delete(res?.data));
    }
  };

  const handleEdit = (value: any) => () => {
    setModalEdit();
    form.setFieldsValue({
      name: value.name,
      type: value.type,
    });
    setDataModal(value);
  };
  const handleDelete = (value: any) => () => {
    setModalDelete();
    setDataModal(value);
  };

  const searchData = useMemo(() => {
    if (searchItem) {
      return games.filter((item: any) => item?.username.includes(searchItem));
    }
    return games;
  }, [games, searchItem]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (title === 'Create') {
          createGame(values);
        }
        if (title === 'Edit') {
          editGame({ ...values, _id: dataModal?._id });
        }
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
    if (title === 'Delete') {
      deleteGame(dataModal);
    }
    handleCancel();
  };

  useEffect(() => {
    fetchListGame();
  }, []);

  return (
    <Container>
      <div
        style={{
          padding: 16,
          background: 'white',
          height: '100%',
          marginTop: 24,
          borderRadius: 10,
        }}
      >
        <HeaderBody
          title={'Games'}
          titleButton={'Create'}
          onClick={handleOnClick}
          onSearch={handleOnSearch}
        />
        <Table
          columns={columns}
          dataSource={searchData}
          scroll={{ x: 1500 }}
          sticky
        />
      </div>
      <Modal
        title={title}
        open={isShowModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ marginBottom: 16 }} />
        {title === 'Delete' ? (
          <h3 style={{ color: 'red' }}>Bạn có muốn xoá không ?</h3>
        ) : (
          <Form
            name="basic"
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            form={form}
          >
            <Form.Item
              name="name"
              wrapperCol={{ offset: 0, span: 32 }}
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input
                style={{ width: '100%' }}
                placeholder="Enter your name"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              name="type"
              rules={[{ required: true, message: 'Please input your type!' }]}
              wrapperCol={{ offset: 0, span: 32 }}
            >
              <Input
                style={{ width: '100%' }}
                placeholder="Enter your type"
                prefix={<BuildOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </Container>
  );
};
export default authMiddleware(GamePage);
