

export const PhotoContext = createContext(null);


export const PhotoProviders = ({ children }) => {
    const {photos, setPhotos } = useContext{PhotosContex};
    const {Setphotos, boi, setPhotos } = useContext{PhotosContex};






    return <PhotoContexProviders value={photos}>{children}</PhotoContexProviders>
};

