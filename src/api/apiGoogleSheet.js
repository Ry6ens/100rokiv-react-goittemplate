import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://storokiv-server.herokuapp.com/',
});

export const axiosGoogleSheet = async (formData) => {
  const { data } = await instance.post(`/api/googleSheet`, formData);
  return data;
};
