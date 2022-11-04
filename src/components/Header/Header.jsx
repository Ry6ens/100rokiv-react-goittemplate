import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import Burger from './Burger/Burger';
import s from './Header.module.scss';

import BasketIcon from 'components/BasketForm/BasketIcon/BasketIcon'
import ButtonLink from 'components/ButtonLink/ButtonLink';

export default function Header() {
  const isMobileTablet = useMediaQuery({ maxWidth: 1023.98 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const products = useSelector(store => store.basket.items);

  return (
    <header className={s.header}>
      {isDesktop && (
        <address className={s.headerAddress}>
          <a
            className={s.hoverAddress}
            href="https://goo.gl/maps/Jof1XhNqpWWVxGcu6"
            rel="noreferrer"
            target="_blank"
          >
            вул. Володимирська 4, м. Київ
          </a>
        </address>
      )}

      {isMobileTablet && <Burger />}

      {products.length ? (
        <BasketIcon />
      ) : (
        <div className={s.overlay}>
          {isDesktop && (
            <a className={s.tel} href="tel:+380680686975">
              Тел: +38 (068) 068-69-75
            </a>
          )}

          <ButtonLink to="/book" text="Бронювання" btnClass="btnLine" />
        </div>
      )}
    </header>
  );
}
