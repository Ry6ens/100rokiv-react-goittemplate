import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://storokiv-server.herokuapp.com',
});

export const axiosLiqPay = async formData => {
  const { data } = await instance.post(`/api/liqpay/pay`, formData);
  return data;
};
