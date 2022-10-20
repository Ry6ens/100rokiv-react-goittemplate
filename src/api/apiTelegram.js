import axios from "axios";

// export const axiosTelegram = async (formData) => {
//   const { data } = axios.post(`/api/telegram`, formData);
//   return data;
// };
const TELEGRAM_TOKEN="5417174408:AAHxdouY7MroFUQFimqQzG89Od7HyWntRFc"
const TELEGRAM_CHAT_ID="-1001801505993"

const URI_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

export const axiosTelegram = async (formData) => {
  const { name, tel, sum, date } = formData;

  const { data } = axios.post(URI_API, {
    chat_id: TELEGRAM_CHAT_ID,
    parse_mode: "html",
    text: `
    <b>Подарунковий сертифікат</b>

    <b>Ім'я:</b> ${name}
    <b>Телефон:</b> ${tel}
    <b>Сума:</b> ${sum.label}
    <b>Дата:</b> ${date}
    `,
  });
  return data;
};
