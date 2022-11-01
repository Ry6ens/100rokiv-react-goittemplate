import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://storokiv-server.herokuapp.com/',
});

export const axiosTelegram = async (formData) => {
  const { data } = await instance.post(`/api/telegram`, formData);
  return data;
};
