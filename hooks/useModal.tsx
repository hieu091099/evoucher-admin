// layouts/AuthLayout.tsx
import {useState,} from 'react';
import { Form } from 'antd';
const useModal = () => {
    const [dataModalCreate, setDataModalCreate] = useState({
        title: 'Create',
        isShowModalCreate: false,
        data: {},
    
    })
    const [dataModalEdit, setDataModalEdit] = useState({
        title: 'Edit',
        isShowModalEdit: false,
        data: {},
    })

    const [dataModalDelete, setDataModalDelete] = useState({
        title: 'Delete',
        isShowModalDelete: false,
        data: {},
    })
    const [form] = Form.useForm();

    const setModalEdit = (data?: any) => {
        setDataModalEdit(prev=>({...prev,isShowModalEdit: true, data}))
        setDataModalCreate(prev=>({...prev,isShowModalCreate: false}))
        setDataModalDelete(prev=>({...prev,isShowModalDelete: false}))

    }
    const setModalCreate = (data?: any) => {
        setDataModalCreate(prev=>({...prev, isShowModalCreate: true, data }))
        setDataModalEdit(prev=>({...prev,isShowModalEdit: false}))
        setDataModalDelete(prev=>({...prev,isShowModalDelete: false}))

    }
    const setModalDelete = (data?: any) => {
        setDataModalCreate(prev=>({...prev,isShowModalCreate: false}))
        setDataModalDelete(prev=>({...prev, isShowModalDelete: true, data}))
        setDataModalEdit(prev=>({...prev,isShowModalEdit: false}))
    }

    const setModalHide = () => {
        setDataModalCreate(prev=>({...prev,isShowModalCreate: false}))
        setDataModalDelete(prev=>({...prev, isShowModalDelete: true}))
        setDataModalEdit(prev=>({...prev,isShowModalEdit: false}))
        form.resetFields();
    }
  return {
    form,
    dataModalCreate,
    dataModalEdit,
    dataModalDelete,
    setModalEdit,
    setModalCreate,
    setModalDelete,
    setModalHide
  }
};

export default useModal;
