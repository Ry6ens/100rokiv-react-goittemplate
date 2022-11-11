import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { basketProductsActions } from 'redux/basketProducts/basketProducts-slice';
import { basketTicketsActions } from 'redux/basketTickets/basketTickets-slice';
import { basketLiqPayActions } from 'redux/liqpay/liqpay-slice';

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const keys = useSelector(store => store.liqpay.keys);

  useEffect(() => {
    if (keys !== null) {
      window.LiqPayCheckoutCallback();
    }
  }, [keys]);

  window.LiqPayCheckoutCallback = function () {
    window.LiqPayCheckout.init({
      data: keys.data,
      signature: keys.signature,
      embedTo: '#liqpay_checkout',
      language: 'uk',
      mode: 'embed', // embed || popup,
    })
      .on('liqpay.callback', function (data) {
        if (data.status === 'success') {
          dispatch(basketProductsActions.clearBasket());
          dispatch(basketTicketsActions.clearBasket());
          dispatch(basketLiqPayActions.clearBasket());
          navigate('/success');
        }
      })
      .on('liqpay.ready', function (data) {
        // ready
      })
      .on('liqpay.close', function (data) {
        // close
      });
  };

  return (
    <>
      <div id="liqpay_checkout"></div>
    </>
  );
}
