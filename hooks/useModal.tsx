// layouts/AuthLayout.tsx
import { useState } from 'react';
import { Form } from 'antd';
const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [title, setTitle] = useState('Create');
  const [dataModal, setDataModal] = useState({});

  const [form] = Form.useForm();

  const setModalEdit = () => {
    setIsShowModal(false)

    setTitle('Edit')
    setIsShowModal(true)
  };

  const setModalCreate = () => {
    setIsShowModal(false)

    setTitle('Create')
    setIsShowModal(true)
  };

  const setModalDelete = () => {
    setIsShowModal(false)
    setTitle('Delete')
    setIsShowModal(true)
  };

  const setModalHide = () => {
    setIsShowModal(false)
  };

  return {
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
  };
};

export default useModal;
