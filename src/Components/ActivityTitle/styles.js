import styled from 'styled-components'

// Activity Title

export const ActivityTitle_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 150px;
  width: 100vw;
  margin: 25px 15px 15px;

  @media (min-width: 768px) {
    width: 100vw;
    height: 100px;
    margin: 55px 25px 25px 125px;
    transition: all 0.2s ease-in-out;
  }
`

export const ActivityTitle_H1Wrap = styled.div`
  display: flex;
`

export const ActivityTitle_H1 = styled.h1`
  display: flex;
  align-items: flex-start;
  margin: 25px 15px 15px;
`

// Rating Star Section

export const RatingWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100vw;
  margin: 10px 15px 15px;
`

export const Star_Icon = styled.i`
  display: flex;
  color: red;
`

export const RatingVote = styled.span`
  display: flex;
  margin-left: 5px;
`
export const RatingNumbers = styled.span`
  display: flex;
  margin-left: 5px;
`

export const RatingDot = styled.span`
  display: flex;
  margin-left: 5px;
`

export const Location_Anchor = styled.a`
  display: flex;
  margin-left: 5px;
  color: black;
  text-decoration: underline;
`

// Share div

export const ShareButton = styled.button`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    margin-left: 700px;
    max-width: 200px;
    max-height: 200px;
    background-color: white;
    border: none;
  }
`

export const ShareIcon = styled.i`
  @media (min-width: 1024px) {
    margin: 10px 15px 15px;
  }
`

export const Span = styled.span`
  @media (min-width: 1024px) {
    display: flex;

    margin-left: 5px;
    text-decoration: underline;
  }
`
