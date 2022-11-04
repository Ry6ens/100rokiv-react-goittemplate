import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://storokiv-server.herokuapp.com',
  // baseURL: 'http://localhost:4000',
});

export const axiosGetProducts = async () => {
  const { data } = await instance.get(`/api/products`);
  return data;
};

export const axiosGetProductsByCategory = async (category) => {
  const { data } = await instance.get(`/api/products/${category}`);
  return data;
};
