import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_API_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export const axiosGet = async (url: string, config = {}) => {
  try {
    const response = await axiosInstance.get(url, config);
    if (response.status >= 200 && response.status <= 300) {
      return { success: true, data: response?.data };
    }
    return { success: false, data: response?.data };
  } catch (error: any) {
    console.log(
      'axiosGet',
      error.response?.data?.message || 'Something went wrong'
    );
  }
};

export const axiosPost = async (url: string, data: any, config = {}) => {
  try {
    const response = await axiosInstance.post(url, data, config);
    if (response.status >= 200 && response.status <= 300) {
      return { success: true, data: response?.data };
    }
    return { success: false, data: response?.data };
  } catch (error: any) {
    console.log(
      'axiosPost',
      error.response?.data?.message || 'Something went wrong'
    );
  }
};

export const axiosPut = async (url: string, data: any, config = {}) => {
  try {
    const response = await axiosInstance.put(url, data, config);
    if (response.status >= 200 && response.status <= 300) {
      return { success: true, data: response?.data };
    }
    return { success: false, data: response?.data };
  } catch (error: any) {
    console.log(
      'axiosPut',
      error.response?.data?.message || 'Something went wrong'
    );
  }
};

export const axiosDelete = async (url: string, config = {}) => {
  try {
    const response = await axiosInstance.delete(url, config);
    if (response.status >= 200 && response.status <= 300) {
      return { success: true, data: response?.data };
    }
    return { success: false, data: response?.data };
  } catch (error: any) {
    console.log(
      'axiosDelete',
      error.response?.data?.message || 'Something went wrong'
    );
  }
};

export default axiosInstance;
