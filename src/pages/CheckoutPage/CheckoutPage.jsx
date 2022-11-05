/* eslint-disable no-undef */
import { useSelector } from 'react-redux';
// import parse from 'html-react-parser';
// import { useEffect } from 'react';
import Iframe from 'react-iframe';
import { Helmet } from 'react-helmet-async';

// import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';

// const liqpay = document.querySelector('#liqpay_checkout');

export default function CheckoutPage() {
  const keys = useSelector(store => store.liqpay.keys);
  // const loadingPay = useSelector(store => store.liqpay.loading);

  console.log(keys.data);
  console.log(keys.signature);

  const html = `window.LiqPayCheckoutCallback = function() {
    LiqPayCheckout.init({
      data: "${keys.data}",
      signature: "${keys.signature}",
      embedTo: "#liqpay_checkout",
      mode: "embed" // embed || popup,
        }).on("liqpay.callback", function(data){
      console.log(data.status);
      console.log(data);
      }).on("liqpay.ready", function(data){
        // ready
      }).on("liqpay.close", function(data){
        // close
    });
  };`;

  return (
    <div>
      {/* {loadingPay ? <Loader /> : parse(payHTML)} */}
      {/* <Iframe
        // url={`https://www.liqpay.ua/api/request?data=${keys.data}=&signature=${keys.signature}`}
        url={`https://www.liqpay.ua/api/3/checkout?data=${keys.data}&signature=${keys.signature}`}
        // url="https://www.liqpay.ua/api/3/checkout?data=eyJkZXNjcmlwdGlvbiI6ItGB0LzQsNC20LXQvdCwINC30LDRgtGW0YDQutCwLCDRj9Cz0L7QtNC4INGB0LzQvtGA0L7QtNC40L3QuCDRliDRh9C+0YDQvdC+0LHRgNC40LLRhtGWIiwiYW1vdW50IjoxLCJkZWxpdmVyeSI6eyJlbWFpbCI6InNkZkBzZC5jb20iLCJwaG9uZSI6IiszODA5ODA4Njk5MDIifSwicHVibGljX2tleSI6ImkyMDk0NDk3NjMzMiIsInZlcnNpb24iOiIzIiwiYWN0aW9uIjoicGF5IiwibGFuZ3VhZ2UiOiJ1YSIsImN1cnJlbmN5IjoiVUFIIn0=&signature=khA1D4OzDo7hh68vY2ljam+yiP8="
        width="100%"
        height="1000px"
        allow="payment"
        // id=""
        // className=""
        // display="block"
        // position="relative"
      /> */}
      <div id="liqpay_checkout"></div>

      <Helmet>
        <script>{html}</script>
        <script src="//static.liqpay.ua/libjs/checkout.js" async></script>
      </Helmet>
    </div>
  );
}
