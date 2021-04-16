import Rank from "../Rank/Rank";
import {
  CardWrapper, Img, TextWrapper, Rank, Title, Bold, Detail
} from "./ActivityCard.elements.js";


export const ActivityCard = ({ img, rate, number, country, title, price }) => {
  return (
    <CardWrapper>
      <Img src={img} alt="" />
      <TextWrapper>
        <Rank
          rate={rate}
          number={number}
          country={country}
          light={true}
          underline={false}
        />
        <Title>{title}</Title>
        <Detail>
          <Bold>A partire da {price}€</Bold> a persona
        </Detail>
      </TextWrapper>
    </CardWrapper>
  );
};
export default ActivityCard;
