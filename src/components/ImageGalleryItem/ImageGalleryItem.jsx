

import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';
import ModalImage from 'react-modal-image';

const ImageGalleryItem = ({ webformatURL, largeImageURL, alt }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <div  className={styles.ImageGalleryItemImage} >
        <ModalImage small={webformatURL} large={largeImageURL} alt={alt} />
      </div>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageGalleryItem;

