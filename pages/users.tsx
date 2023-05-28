'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Table, Button, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import HeaderBody from '@/components/HeaderBody';
import Container from '@/components/Container';
import authMiddleware from '@/middlewares';
import useModal from '@/hooks/useModal';
import RegisterForm from '@/components/RegisterForm';
import { axiosDelete, axiosGet, axiosPost, axiosPut } from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  user_create,
  user_update,
  user_delete,
  get_list_user,
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

const UserPage: React.FC = () => {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState('');
  const users = useSelector((state: any) => state.app.users);
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
    form?.resetFields();
    setModalCreate();
  };

  const handleOnSearch = (value: any) => {
    setSearchItem(value)
  };
  const handleCancel = () => {
    setModalHide();
  };

  const fetchListUser = async () => {
    const res = await axiosGet(API.USERS);
    if (res?.success) {
      dispatch(get_list_user(res?.data));
    }
  };

  const createUser = async (formData: any) => {
    const res = await axiosPost(API.USERS, {
      ...formData,
    });
    if (res?.success) {
      dispatch(user_create(res?.data));
    }
  };

  const editUser = async (formData: any) => {
    const res = await axiosPut(API.USERS_UPDATE(formData?._id), {
      ...formData,
    });
    if (res?.success) {
      dispatch(user_update(res?.data));
    }
  };

  const deleteUser = async (formData: any) => {
    const res = await axiosDelete(API.USERS_DELETE(formData?._id));
    if (res?.success) {
      dispatch(user_delete(res?.data));
    }
  };

  const handleEdit = (value: any) => () => {
    setModalEdit();
    form.setFieldsValue({
      username: value.username,
      password: value.password,
      email: value.email,
      phone: value.phone,
    });
    setDataModal(value);
  };
  const handleDelete = (value: any) => () => {
    setModalDelete();
    setDataModal(value);
  };

  const searchData = useMemo(() => {
    if (searchItem) {
      return users.filter((item: any) => item?.username.includes(searchItem));
    }
    return users;
  }, [users, searchItem]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const dateObject = values?.birthday?.$d;
        const day = dateObject?.getDate();
        const month = dateObject?.getMonth() + 1;
        const year = dateObject?.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        const result = { ...values, birthday: formattedDate };
        if (title === 'Create') {
          createUser(result);
        }
        if (title === 'Edit') {
          editUser({ ...result, _id: dataModal?._id });
        }
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
    if (title === 'Delete') {
      deleteUser(dataModal);
    }
    handleCancel();
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
          <RegisterForm form={form} isShowButton={false} />
        )}
      </Modal>
    </Container>
  );
};

export default authMiddleware(UserPage);
