import PropTypes from 'prop-types';
import "./ImageDisplayer.css";

function ImageDisplayer({ fileName, alternativeText}){
    return(
        <div className='array'>
            <img src={fileName} alt={alternativeText}/>
        </div>
    )
}

ImageDisplayer.propTypes = {
    fileName: PropTypes.string.isRequired,
    alternativeText: PropTypes.string.isRequired,
};

export default ImageDisplayer;