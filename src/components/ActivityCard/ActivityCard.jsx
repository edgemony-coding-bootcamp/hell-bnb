import React from "react";
import Rank from "../Rank/Rank";
import {
  CardWrapper,
  Img,
  TextWrapper,
  Title,
  Bold,
  Detail,
} from "./ActivityCard.elements";

export const ActivityCard = ({ img, rate, number, country, title, price }) => (
  <CardWrapper>
    <Img src={img} alt="" />
    <TextWrapper>
      <Rank
        rate={rate}
        number={number}
        country={country}
        light
        underline={false}
      />
      <Title>{title}</Title>
      <Detail>
        <Bold>A partire da {price}€</Bold> a persona
      </Detail>
    </TextWrapper>
  </CardWrapper>
);
export default ActivityCard;
