import { useEffect, useState } from "react";
import { IImageWithFavorite } from "../../interfaces";
import { Image } from "../ImageList/styles";

interface ImageListProps{
    imageAPI: IImageWithFavorite[]
}

export const ImageList = ({imageAPI}: ImageListProps) => {
    const [images, setImages] = useState<any[]>([])

    useEffect(() => {
        setImages(imageAPI)
    },[imageAPI])

    const handleFavorite = (id: number) => {
    const newState = [...imageAPI];
    newState[id].isFavorite = !newState[id].isFavorite;
    setImages(newState)
  };
  return (
    <>
      {images.map((image, index) => (
        <Image
          key={image.id}
          onDoubleClick={() => handleFavorite(index)}
          FavImage={image.isFavorite}
          src={image.download_url}
          alt="we are sorry, no picture here"
        />
      ))}
    </>
  );
};