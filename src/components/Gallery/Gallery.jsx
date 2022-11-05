import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import s from  "./Gallery.module.scss"

import Modal from 'components/Modal/Modal';
import TitleH2 from 'components/TitleH2/TitleH2';
import Section from 'components/Section/Section';
import Image from 'components/Image/Image';

import { getAllProducts } from 'redux/products/products-selectors';
import { getProducts } from 'redux/products/products-operations';

export default function Gallery() {
  const dispatch = useDispatch();
  const data = useSelector(getAllProducts);
  const [showModal, setShowModal] = useState(false);

  const handleClickModal = e => {
    document.body.classList.add('no-scroll');

    setShowModal(e.target.dataset.image);
  };

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const elements = data.map(({ _id, imgGallery }) => {
    const Wrapper = styled.div`
      background-image: url(${imgGallery});
    `;

    return (
      <Wrapper
        key={_id}
        className={s.photo}
        data-image={imgGallery}
        onClick={handleClickModal}
      ></Wrapper>
    );
  });

  const getModalImage = showModal => {
    setShowModal(showModal);
  };

  return (
    <Section sectionClass="sectionGallery">
      <TitleH2 text="Галерея" />
      <div className={s.galleryList}>{elements}</div>
      {showModal && (
        <Modal onClose={getModalImage}>
          <Image src={showModal} alt="img" imgClass="imgGalleryModal"/>
        </Modal>
      )}
    </Section>
  );
}
