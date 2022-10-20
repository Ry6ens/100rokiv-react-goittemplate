import axios from "axios";

export const axiosSendGridMessage = async (formData) => {
  const { data } = axios.post(`/api/email`, formData);
  return data;
};
