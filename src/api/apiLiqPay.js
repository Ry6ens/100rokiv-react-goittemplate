import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://storokiv-server.herokuapp.com',
  // baseURL: 'http://localhost:4000',
});

export const axiosLiqPay = async formData => {
  const { data } = await instance.post(`/api/liqpay/pay`, formData);
  return data;
};

// export const axiosLiqResult = async formData => {
//   const { data } = await instance.post(`/api/liqpay/result`, formData);
//   return data;
// };
