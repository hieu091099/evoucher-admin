import React, { useEffect } from 'react';
import { Table, Button, Modal, Form } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import HeaderBody from '../components/HeaderBody';
import Container from '../components/Container';
import requireAuth from '../utils/requireAuth';
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
  requireAuth();
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.app.users);
  console.log('users', users);
  const { dataModalCreate, form, setModalCreate, setModalHide } = useModal();

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
      render: () => (
        <React.Fragment>
          <Button type="primary" ghost>
            Edit
          </Button>
          <Button danger style={{ marginLeft: 8 }}>
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
        dispatch(user_create(data))
    }
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const dateObject = values.birthday.$d;
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
        const year = dateObject.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        const result = { ...values, birthday: formattedDate };
        createUser(result)
        // Xử lý giá trị từ form ở đây
        form.resetFields(); // Reset form sau khi xử lý thành công (nếu cần)
        handleCancel()
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
        title={dataModalCreate?.title}
        open={dataModalCreate?.isShowModalCreate}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ marginBottom: 16 }} />
        <RegisterForm form={form} isShowButton={false} />
      </Modal>
    </Container>
  );
};

export default UserPage;
