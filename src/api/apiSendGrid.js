import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

export const axiosSendGridMessage = async (formData) => {
  const { data } = instance.post(`/api/email`, formData);
  return data;
};
