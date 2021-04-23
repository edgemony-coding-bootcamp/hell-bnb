import React from "react";
import {
  ActivityTitleWrapper,
  ActivityTitleText,
  ShareButton,
  Span,
  RankingWrap,
} from "./styles";

import Rank from "../Rank/Rank";

function ActivityTitle({ title, rate, number, country }) {
  return (
    <ActivityTitleWrapper>
      <ActivityTitleText>
        Lezione di danza e cultura balinese{title}
      </ActivityTitleText>
      <RankingWrap>
        <Rank
          light={false}
          underline
          bold
          margin
          rate={rate}
          number={number}
          country={country}
        />
        <ShareButton type="button">
          <i className="share square icon" />
          <Span>Condividi</Span>
        </ShareButton>
      </RankingWrap>
    </ActivityTitleWrapper>
  );
}

export default ActivityTitle;
