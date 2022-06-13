import { useLayoutEffect, useState } from "react";
import * as S from "./styles"
import { ImageList } from "../ImageList";
import { IImageWithFavorite } from "../../interfaces";
import { formatToFavorite } from "../../utils/images";

export const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [imageAPI, setImageAPI] = useState<IImageWithFavorite[]>([]);

  useLayoutEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=50')
    .then(res => res.json())
    .then(data => {setImageAPI(formatToFavorite(data))})
  }, [])

  const toggleTab = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <S.Container>
      <S.TabBlock>
        <S.TabButton 
          TabNumber={activeIndex === 1}
          onClick={() => toggleTab(1)}
        >
          imageList
        </S.TabButton>
        <S.TabButton 
          TabNumber={activeIndex === 2}
          onClick={() => toggleTab(2)}
        >
          favoriteList
        </S.TabButton>
      </S.TabBlock>
      <S.TabContent>
          <S.CurrentTab
          TabNumber={activeIndex === 1}
          >
            <ImageList imageAPI={imageAPI}/>
          </S.CurrentTab>
          <S.CurrentTab
          TabNumber={activeIndex === 2}
          >
            <ImageList imageAPI={imageAPI.filter((fav => fav.isFavorite === true))}/>
          </S.CurrentTab>
      </S.TabContent>
    </S.Container>
  );
};

export default Tabs;
