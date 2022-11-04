import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { useEffect } from 'react';

import Loader from 'components/Loader/Loader';

// const liqpay = document.querySelector('#liqpay_checkout');

export default function CheckoutPage() {
  const payHTML = useSelector(store => store.liqpay.pay);
  const loadingPay = useSelector(store => store.liqpay.loading);

  useEffect(() => {
    window.location.href = "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOjUsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQnNGW0Lkg0YLQvtCy0LDRgCIsInB1YmxpY19rZXkiOiJpMjA5NDQ5NzYzMzIiLCJsYW5ndWFnZSI6InJ1In0=&signature=W3bMUz0oxUQ7H/EM6XlfEg2LvoU=";
  }, []);

  return (
    <main>
      {loadingPay ? <Loader /> : parse(payHTML)}
      <div id="liqpay_checkout"></div>
    </main>
  );
}
