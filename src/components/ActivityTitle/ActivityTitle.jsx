import React from "react";
import {
  ActivityTitleWrapper,
  ActivityTitleText,
  ShareButton,
  Span,
  Dot,
  CountryTitle,
  RankingWrap,
} from "./styles";

import Rank from "../Rank/Rank";

function ActivityTitle({ title, rate, number, country }) {
  return (
    <ActivityTitleWrapper>
      <ActivityTitleText>{title}</ActivityTitleText>
      <RankingWrap>
        <Rank light={false} underline bold margin rate={rate} number={number} />
        <Dot> &nbsp; · &nbsp; </Dot>
        <CountryTitle light={false}> {country}</CountryTitle>
        <ShareButton type="button">
          <i className="share square icon" />
          <Span>Condividi</Span>
        </ShareButton>
      </RankingWrap>
    </ActivityTitleWrapper>
  );
}

export default ActivityTitle;
