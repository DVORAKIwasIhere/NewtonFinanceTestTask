import styled from "styled-components"
import { FavoriteProp } from "../../interfaces"

import { ReactComponent as LikeIcon } from "../../assets/svg/like.svg";



export const Image = styled.img<FavoriteProp>`
    background-image: url("../../assets/svg/like.svg") absolute;
    max-width: 100%;
    max-height: 100%;
`

export const Like = styled(LikeIcon)<FavoriteProp>`
    position: absolute;
    left: 10px;
    bottom: 10%;
    width: 25%;
    height: 25%;
    fill: ${props => props.FavImage && "#ee536d"};
    opacity: ${props => props.FavImage ? 1 : 0};
`

export const Unity = styled.span`
    position: relative;
`