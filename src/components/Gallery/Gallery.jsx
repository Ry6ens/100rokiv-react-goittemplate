import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Gallery.scss';

import { items } from "./items";

import Modal from '../Modal/Modal';
import TitleH2 from '../TitleH2/TitleH2';

import { getProductsByImgSelector } from 'redux/products/products-selectors';
import { getProductsByImg } from 'redux/products/products-operations';

export default function Gallery() {
  const dispatch = useDispatch();
  const data = useSelector(getProductsByImgSelector);
  const [showModal, setShowModal] = useState(false);

  const handleClickModal = e => {
    document.body.classList.add('no-scroll');

    setShowModal(e.target.dataset.image);
  };

  useEffect(() => {
    dispatch(getProductsByImg())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const elements = data.map(({ id, title, imgGallery }) => (
    <div
      key={id}
      className={title}
      data-image={imgGallery}
      background-image
      onClick={handleClickModal}
    ></div>
  ));

  const getModalImage = showModal => {
    setShowModal(showModal);
  };

  return (
    <section className="galleryPhotos">
      <TitleH2 text="Галерея" />
      <div className="galleryList">{elements}</div>
      {showModal && (
        <Modal onClose={getModalImage}>
          <img src={showModal} alt="img" className="modalImg" />
        </Modal>
      )}
    </section>
  );
}
