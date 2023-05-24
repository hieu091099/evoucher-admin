import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEST_API_URL || '',
  headers: {
    'Content-Type': 'application/json',
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
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const axiosPost = async (url: string, data: any, config = {}) => {
  try {
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const axiosPut = async (url: string, data: any, config = {}) => {
    try {
      const response = await axiosInstance.put(url, data, config);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Something went wrong');
    }
  };
  
  export const axiosDelete = async (url: string, config = {}) => {
    try {
      const response = await axiosInstance.delete(url, config);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Something went wrong');
    }
  };

export default axiosInstance;
