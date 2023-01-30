import { createContext } from "react";

export const PhotoContext = createContext(null);


export const PhotoProviders = ({ children }) => {

    return <PhotoContexProviders value={photos}>{children}</PhotoContexProviders>
};

