'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Button, Table, Modal, Form, Input, Select } from 'antd';
import { BuildOutlined, UserOutlined } from '@ant-design/icons';
import Container from '../components/Container';
import authMiddleware from '../middlewares';
import type { ColumnsType } from 'antd/es/table';
import HeaderBody from '@/components/HeaderBody';
import useModal from '@/hooks/useModal';
import { axiosDelete, axiosGet, axiosPost, axiosPut } from '../utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  transaction_create,
  transaction_update,
  transaction_delete,
  get_list_transaction,
} from '../redux/actions/appAction';
import API from '../utils/api';

interface DataType {
  user: object;
  voucher: object;
  transactionDate: Date;
}
const TransactionPage: React.FC = () => {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState('');
  const users = useSelector((state: any) => state.app.users);
  const vouchers = useSelector((state: any) => state.app.vouchers);
  const transactions = useSelector((state: any) => state.app.transactions);
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
      title: 'user',
      width: 200,
      dataIndex: 'user',
      key: '1',
      fixed: 'left',
    },
    {
      title: 'voucher',
      dataIndex: 'voucher',
      key: '2',
      width: 200,
    },
    {
      title: 'transactionDate',
      dataIndex: 'transactionDate',
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

  const fetchListTransaction = async () => {
    const res = await axiosGet(API.TRANSACTIONS);
    if (res?.success) {
      dispatch(get_list_transaction(res?.data));
    }
  };

  const createTransaction = async (formData: any) => {
    const res = await axiosPost(API.TRANSACTIONS, {
      ...formData,
    });
    if (res?.success) {
      dispatch(transaction_create(res?.data));
    }
  };

  const editTransaction = async (formData: any) => {
    const res = await axiosPut(API.TRANSACTIONS_UPDATE(formData?._id), {
      ...formData,
    });
    if (res?.success) {
      dispatch(transaction_update(res?.data));
    }
  };

  const deleteTransaction = async (formData: any) => {
    const res = await axiosDelete(API.TRANSACTIONS_DELETE(formData?._id));
    if (res?.success) {
      dispatch(transaction_delete(res?.data));
    }
  };

  const handleEdit = (value: any) => () => {
    setModalEdit();
    form.setFieldsValue({
      user: value.user._id,
      voucher: value.voucher._id,
      transactionDate: value.transactionDate,
    });
    setDataModal(value);
  };
  const handleDelete = (value: any) => () => {
    setModalDelete();
    setDataModal(value);
  };

  const searchData = useMemo(() => {
    if (searchItem) {
      return transactions.filter((item: any) =>
        item?.username.includes(searchItem)
      );
    }
    return transactions;
  }, [transactions, searchItem]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
      
        if (title === 'Create') {
          createTransaction(values);
        }
        if (title === 'Edit') {
          editTransaction({ ...values, _id: dataModal?._id });
        }
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
    if (title === 'Delete') {
      deleteTransaction(dataModal);
    }
    handleCancel();
  };

  useEffect(() => {
    fetchListTransaction();
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
          title={'Transactions'}
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
              name="user"
              wrapperCol={{ offset: 0, span: 32 }}
              rules={[{ required: true, message: 'Please select user!' }]}
            >
              <Select
                style={{ width: '100%' }}
                defaultValue={users[0]?._id}
                options={users?.map((item: any) => {
                  return { value: item?._id, label: item?.username };
                })}
              />
            </Form.Item>

            {/* <Form.Item
              name="voucher"
              rules={[{ required: true, message: 'Please select voucher!' }]}
              wrapperCol={{ offset: 0, span: 32 }}
            >
               <Select
                style={{ width: '100%' }}
                defaultValue={vouchers[0]?._id}
                options={vouchers?.map((item: any) => {
                  return { value: item?._id, label: item?.code };
                })}
              />
            </Form.Item> */}
          </Form>
        )}
      </Modal>
    </Container>
  );
};
export default authMiddleware(TransactionPage);
