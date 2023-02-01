import { useContext } from "react";
import { PhotosContext } from "../providers/PhotosProviders";
import { Popup } from "./";

export const Gallery = () => {
    const {photos, boi, setPhotos, setSelectedPhotosId } = useContext{PhotosContex};

    return <div>
        Gallery
        <button onClick={() => setPhotos([])}>Clear Photos</button>
        {photos.map((photo) => (
            <div key={photo.id} style={{ displey: "inline-block"}}>
                <img src={photo.thumbnailUrl} alt={photo.title} />

            </div>npm
        ))}
        </div>
);
        };