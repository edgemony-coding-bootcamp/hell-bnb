import styled, {css}from "styled-components";
import device from "../../assets/breakpoints";

export const CommentsWrapper = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 358px;
    padding: 32px 0px;
    margin-left:24px;
`

export const ReviewContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: auto;
    ${(props) =>
        props.modalScroll &&
        css`
        overflow-y: auto;
        overflow-x: none;
        flex-direction: column;
    `}
    @media ${device.deviceM} {
       padding: 0;
       width:100%;
       height: 648px;
       flex-direction: column;
       flex-wrap: nowrap;
       margin: 0px -8px
    }
    
    @media ${device.deviceXL} {
       flex-direction: column;
       flex-wrap: wrap;
    }
    

`

export const GuestReview = styled.div`
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    height: 236px;
    min-width: 329px;
    padding: 16px;
    margin: 0px 12px 0px 0px;
    
    ${(props) =>
    props.noBorder &&
    css`
    border:none;
    padding: 0;
    margin:0px 0px 32px;
    max-width: 350px;
    height: fit-content;
   `}
   @media ${device.deviceM} {
       border: none;
       margin-bottom: 40px;
       width: 410px;
       height: 168px;
   }
   
`
export const GuestData = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0px, 10px;
`
export const GuestImage = styled.img `
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
export const DataContainer = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    
`
export const GuestName = styled.span `
    display: block;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    margin-left: 12px;
`
export const GuestRevDate = styled.span `
    display: block;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #717171;
    margin-left: 12px;
`
export const GuestComment = styled.p`
    font-size: 16px;
    margin: 10px 0px;
    ${(props) =>
        props.modalComment &&
        css`
        font-size: 15px;
        color:  #717171;
        line-height: 1.8;
        word-break: break-word;
        `}
`
export const ReviewBtnDiv = styled.div `
    width: 100%;
    height: 100px;
    margin-top: 24px;
`
export const ReviewBtn = styled.button `
    display: block;
    position: relative;
    max-width: 366px;
    width:100%;
    height: 48px;
    cursor: pointer; 
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px ;
    border-radius: 8px ;
    border: 1px solid ;
    outline: none ;
    padding: 13px 0px;
    border-color: #222222 ;
    background: #FFFFFF ;
    color: #222222 ;
    margin: 0px;
    font-weight: 400;
`