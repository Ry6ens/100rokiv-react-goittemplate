import axios from "axios";

export const axiosTelegram = async (formData) => {
  const { data } = axios.post(`/api/telegram`, formData);
  return data;
};
