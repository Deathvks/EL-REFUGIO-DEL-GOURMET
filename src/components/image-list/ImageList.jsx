import photos from "../../services/photos/photos";

function ImageList() {
    return (
        <>
            <div className="image-list-images-container">
                {
                    photos.map((photo, index) => {
                        <div className="image-list-image-wrapper">
                            <img key={index} src={`/img/${photo.fileName}`} alt={`imagen ${index}`} />
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default ImageList;