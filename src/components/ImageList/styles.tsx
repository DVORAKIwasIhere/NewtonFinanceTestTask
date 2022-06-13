import React from "react"
import styled from "styled-components"
import { FavoriteProp } from "../../interfaces"



export const Image = styled.img<FavoriteProp>`
    border-width: ${props => props.FavImage ? "0 0 5px 0" : ""} ;
    border-style: ${props => props.FavImage ? "solid" : ""};
    border-color: ${props => props.FavImage ? "pink" : ""};
    max-width: 100%;
    max-height: 100%;
`

