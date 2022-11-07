/* eslint-disable no-undef */
import { useSelector, useDispatch } from 'react-redux';
// import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
// import Iframe from 'react-iframe';
import { Helmet } from 'react-helmet-async';

// import Loader from 'components/Loader/Loader';
// import Section from 'components/Section/Section';
// import { getLiqResultOperations } from 'redux/liqpay/liqpay-operations';

// const liqpay = document.querySelector('#liqpay_checkout');

export default function CheckoutPage() {
  const dispatch = useDispatch()
  const keys = useSelector(store => store.liqpay.keys);
  // const loadingPay = useSelector(store => store.liqpay.loading);
  const [html, setHTML] = useState('');

  console.log(keys.data);
  console.log(keys.signature);

  useEffect(() => {
    setHTML(`window.LiqPayCheckoutCallback = function() {
      LiqPayCheckout.init({
        data: "${keys.data}",
        signature: "${keys.signature}",
        embedTo: "#liqpay_checkout",
        language: "uk",
        mode: "embed" // embed || popup,
          }).on("liqpay.callback", function(data){
        console.log(data.status);
        console.log(data);
        }).on("liqpay.ready", function(data){
          // ready
        }).on("liqpay.close", function(data){
          // close
      });
    };`);
  }, [keys, dispatch]);

  return (
    <>
      <div id="liqpay_checkout"></div>

      <Helmet>
        <script>{html}</script>
        <script src="//static.liqpay.ua/libjs/checkout.js" async></script>
      </Helmet>
    </>
  );
}
