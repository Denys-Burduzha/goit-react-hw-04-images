

import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import LoadMoreButton from 'components/Button/Button';

const ImageGallery = ({ hits, fetchData }) => {
  const showButton = hits.length > 0;
  
  return (
    <>
      <ul className={styles.ImageGallery  } >
        {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem 
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            dataImg={hits}
            alt={tags}
          />
        ))}
      </ul>

      {showButton && <LoadMoreButton onClick={fetchData} />}
    </>
  ); 
  
};

export default ImageGallery;

ImageGallery.propTypes = {
  hits: PropTypes.array,
  fetchData: PropTypes.func,
};
