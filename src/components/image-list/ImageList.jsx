import photos from "../../services/photos/photos";
import "./ImageList.css";

function ImageList() {
    return (
        <>
            <div className="image-list-images-container1">
                {
                    photos.map((photo, index) => (
                        <div key={index} className="image-list-image-wrapper">
                            <img src={`/img/${photo.fileName}`} alt={`imagen ${index}`} className="image-list-array"/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ImageList;