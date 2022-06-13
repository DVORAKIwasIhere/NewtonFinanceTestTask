import { IImage, IImageWithFavorite } from "../interfaces";

export const formatToFavorite = (images: IImage[]): IImageWithFavorite[] =>{
    return images.map((image) => {
        return {...image, isFavorite: false}
    })
  }