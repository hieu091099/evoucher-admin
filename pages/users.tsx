'use client'
import React, { useEffect } from 'react';
import { Table, Button, Modal, Form } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import HeaderBody from '../components/HeaderBody';
import Container from '../components/Container';
import authMiddleware from '../middlewares';
import useModal from '../hooks/useModal';
import RegisterForm from '../components/RegisterForm';
import { axiosGet, axiosPost } from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { user_create, get_list_user } from '../redux/actions/appAction';
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

const UserPage: React.FC = () => {
 
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.app.users);
  const {
    form,
    isShowModal,
    title,
    setTitle,
    setIsShowModal,
    dataModal,
    setDataModal,
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
      title: 'username',
      width: 200,
      dataIndex: 'username',
      key: '1',
      fixed: 'left',
    },
    {
      title: 'password',
      dataIndex: 'password',
      key: '2',
      width: 200,
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: '3',
      width: 200,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: '4',
      width: 300,
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: '5',
      width: 350,
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
    setModalCreate();
  };
  const handleCancel = () => {
    setModalHide();
  };

  const fetchListUser = async () => {
    const { success, data } = await axiosGet(API.USERS);
    if (success) {
      dispatch(get_list_user(data));
    }
  };

  const createUser = async (formData: any) => {
    const { success, data } = await axiosPost(API.USERS, {
      ...formData,
    });
    if (success) {
      dispatch(user_create(data));
    }
  };

  const handleEdit = (value: any) => () => {
    setModalEdit();
    setDataModal(value);
  };
  const handleDelete = (value: any) => () => {
    setModalDelete();
    setDataModal(value);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const dateObject = values.birthday.$d;
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        const result = { ...values, birthday: formattedDate };
        createUser(result);
        form.resetFields(); 
        handleCancel();
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };

  useEffect(() => {
    fetchListUser();
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
          title={'Users'}
          titleButton={'Create'}
          onClick={handleOnClick}
        />
        <Table
          columns={columns}
          dataSource={users}
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
        <RegisterForm form={form} isShowButton={false} />
      </Modal>
    </Container>
  );
};

export default authMiddleware(UserPage);
