

import PropTypes from 'prop-types';
import styles from './Button.module.css';

const LoadMoreButton = ({onClick}) => {
    return (
        <div className = {styles.BtnContainer}>
            <button className = {styles.Button} type='button' onClick = {onClick}>
                Load more
            </button>
        </div>
    );
};


export default LoadMoreButton;

LoadMoreButton.propTypes = {
    onClick: PropTypes.func,
};

