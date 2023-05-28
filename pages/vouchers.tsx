'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Button, Table, Modal, Form, Input, Select, InputNumber, DatePicker } from 'antd';
import { BuildOutlined, UserOutlined } from '@ant-design/icons';
import Container from '../components/Container';
import authMiddleware from '../middlewares';
import type { ColumnsType } from 'antd/es/table';
import HeaderBody from '@/components/HeaderBody';
import useModal from '@/hooks/useModal';
import { axiosDelete, axiosGet, axiosPost, axiosPut } from '../utils/axios';
import dayjs from 'dayjs';

import { useDispatch, useSelector } from 'react-redux';
import {
  voucher_create,
  voucher_update,
  VOUCHER_DELETE,
  get_list_voucher,
  voucher_delete,
} from '../redux/actions/appAction';
import API from '../utils/api';

interface DataType {
  code: string;
  discount: number;
  game: object;
  quantity: number;
  remainingQuantity: number;
  expirationDate: Date;
}
const VoucherPage: React.FC = () => {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState('');
  const games = useSelector((state: any) => state.app.games);
  const vouchers = useSelector((state: any) => state.app.vouchers);
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

  const [selectedValue, setSelectedValue] = useState(null);
  
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  

  const columns: ColumnsType<DataType> = [
    {
      title: 'id',
      width: 200,
      dataIndex: '_id',
      key: '0',
      fixed: 'left',
    },
    {
      title: 'code',
      width: 200,
      dataIndex: 'code',
      key: '1',
      fixed: 'left',
    },
    {
      title: 'discount',
      dataIndex: 'discount',
      key: '2',
      width: 200,
    },
    {
      title: 'game',
      dataIndex: 'game',
      key: '3',
      width: 200,
    },
    {
      title: 'quantity',
      dataIndex: 'quantity',
      key: '4',
      width: 200,
    },
    {
      title: 'remainingQuantity',
      dataIndex: 'remainingQuantity',
      key: '5',
      width: 200,
    },
    {
      title: 'expirationDate',
      dataIndex: 'expirationDate',
      key: '6',
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

  const fetchListVoucher = async () => {
    const res = await axiosGet(API.VOUCHERS);
    if (res?.success) {
      dispatch(get_list_voucher(res?.data));
    }
  };

  const createVoucher = async (formData: any) => {
    const res = await axiosPost(API.VOUCHERS, {
      ...formData,
    });
    if (res?.success) {
      dispatch(voucher_create(res?.data));
    }
  };

  const editVoucher = async (formData: any) => {
    const res = await axiosPut(API.VOUCHERS_UPDATE(formData?._id), {
      ...formData,
    });
    if (res?.success) {
      dispatch(voucher_update(res?.data));
    }
  };

  const deleteVoucher = async (formData: any) => {
    const res = await axiosDelete(API.VOUCHERS_DELETE(formData?._id));
    if (res?.success) {
      dispatch(voucher_delete(res?.data));
    }
  };

  const handleEdit = (value: any) => () => {
    setModalEdit();
    form.setFieldsValue({
      code: value.code,
      discount: value.discount,
      game: value.game,
      quantity: value.quantity,
      remainingQuantity: value.remainingQuantity,
      expirationDate: value.expirationDate,
    });
    setDataModal(value);
  };
  const handleDelete = (value: any) => () => {
    setModalDelete();
    setDataModal(value);
  };

  const searchData = useMemo(() => {
    if (searchItem) {
      return vouchers.filter((item: any) => item?.code.includes(searchItem));
    }
    return vouchers;
  }, [vouchers, searchItem]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (title === 'Create') {
          console.log('44444', selectedValue)
          createVoucher({...values});
        }
        if (title === 'Edit') {
          editVoucher({ ...values, _id: dataModal?._id });
        }
        form.resetFields();
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
    if (title === 'Delete') {
      deleteVoucher(dataModal);
    }
    handleCancel();
  };

  useEffect(() => {
    fetchListVoucher();
  }, []);
  const dateFormat = 'DD/MM/YYYY';

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
          title={'Vouchers'}
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
              name="code"
              wrapperCol={{ offset: 0, span: 32 }}
              rules={[{ required: true, message: 'Please input your code!' }]}
            >
              <Input
                style={{ width: '100%' }}
                placeholder="Enter your code"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item
              name="discount"
              wrapperCol={{ offset: 0, span: 32 }}
              rules={[
                { required: true, message: 'Please input your discount!' },
              ]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Enter your discount"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item
              name="game"
              wrapperCol={{ offset: 0, span: 32 }}
              rules={[{ required: true, message: 'Please select game!' }]}
            >
              <Select
                style={{ width: '100%' }}
                defaultValue={games[0]?._id}
                onChange={handleChange}
                options={games?.map((item: any) => {
                  return { value: item?._id, label: item?.name };
                })}
              />
            </Form.Item>
            <Form.Item
              name="quantity"
              wrapperCol={{ offset: 0, span: 32 }}
              rules={[
                { required: true, message: 'Please input your quantity!' },
              ]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Enter your quantity"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>
            <Form.Item
              name="remainingQuantity"
              wrapperCol={{ offset: 0, span: 32 }}
              rules={[
                {
                  required: true,
                  message: 'Please input your remainingQuantity!',
                },
              ]}
            >
              <InputNumber
                style={{ width: '100%' }}
                placeholder="Enter your remainingQuantity"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Form.Item>

            <Form.Item
              name="expirationDate"
              rules={[
                { required: true, message: 'Please input your expirationDate!' },
              ]}
              wrapperCol={{ offset: 0, span: 32 }}
            >
              <DatePicker
                style={{ width: '100%' }}
                defaultValue={dayjs('01/01/2023', dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </Container>
  );
};
export default authMiddleware(VoucherPage);
