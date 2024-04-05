import PropTypes from 'prop-types';
import "./ImageDisplayer.css";

function ImageDisplayer({ photo, alternativeText }){
    return(
        <div className='array'>
            <img src={`/img/${photo.fileName}`} alt={alternativeText}/>
        </div>
    )
}

ImageDisplayer.propTypes = {
    photo: PropTypes.object.isRequired,
    alternativeText: PropTypes.string.isRequired,
};

export default ImageDisplayer;
