import styled from "styled-components";
import { TabProp } from "../../interfaces";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    width: 90%;
    background: white;
    margin: 100px auto;
    border: 1px solid rgba(0, 0, 0, 0.274);
`

export const TabBlock = styled.div`
    display: flex;
`

export const TabContent = styled.div`
    flex-grow : 1;
`

export const CurrentTab = styled.div<TabProp>`
    background: white;
    padding: 20px;
    margin: auto;
    width: 90%;
    height: 100%;
    display: ${props => props.TabNumber ? "grid" : "none"};
    justify-content: space-around;
    align-items: center;
    grid-template-columns: auto auto auto;
    gap: 20px;
`

export const TabButton = styled.button<TabProp>`
    border: none;
    padding: 15px;
    text-align: center;
    width: 50%;
    cursor: pointer;
    box-sizing: content-box;
    position: relative;
    outline: none;
    background: ${props => props.TabNumber ? "white" : "rgba(128, 128, 128, 0.075)"};
    border-bottom: ${props => props.TabNumber ? "1px solid transparent" : "1px solid rgba(0, 0, 0, 0.274)"};
    &:not(:last-child) {
        border-right: 1px solid rgba(0, 0, 0, 0.274);
    };
`
