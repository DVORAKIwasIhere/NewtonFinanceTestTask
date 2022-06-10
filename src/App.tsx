import { useEffect, useState } from 'react';
import { IImage, IImageWithFavorite } from './interfaces';
import { formatToFavorite } from './utils/images';

function App() {
  const [imageAPI, setImageAPI] = useState<IImageWithFavorite[]>([]);
  const [favorite, setFavorite] = useState<boolean>(false)

  const handleFavorite = (id: number) => {
    // console.log(prev)
    const newState = [...imageAPI]
    newState[id].isFavorite = !newState[id].isFavorite
    setImageAPI(newState)
  }


  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=3')
    .then(res => res.json())
    .then(data => {setImageAPI(formatToFavorite(data))})
  }, [])

  const formatToFavorite = (images: IImage[]): IImageWithFavorite[] =>{
    return images.map((image) => {
        return {...image, isFavorite: false}
    })
  }

  return (
    <div className="App">
      {Boolean(imageAPI.length) && imageAPI.map((image, index) => {
        
        return(
          <img key={image.id}  onDoubleClick={() => handleFavorite(index)}  src={image.download_url} alt="we are sorry, no picture here" width={400} height={400}/>
        ) 
      })}
    </div>
  );
}

export default App;
