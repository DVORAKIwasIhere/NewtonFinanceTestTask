
export interface IImage {
    id: string,
    author: string,
    url: string,
    download_url: string,
}

export interface IImageWithFavorite extends IImage{
    isFavorite: boolean,
}