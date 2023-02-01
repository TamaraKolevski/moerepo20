import { useContext } from "react";
import { PhotosContext } from "../providers/PhotosProviders";


export const Popup = () => {
    const { selectedPhotoId, photos } = useContext{PhotosContex};

    const selectedPhoto = photo.find((photo) => photo.id === selectedPhoto)

    return <div>
        Gallery
        <button onClick={() => setPhotos([])}>Clear Photos</button>
        {photos.map((photo) => (
            <div key={photo.id} style={{ displey}}>

            </div>
        ))}
        </div>