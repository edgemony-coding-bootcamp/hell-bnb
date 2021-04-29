/* eslint-disable */

import React from "react";
import {
  IconsSectionWrapper,
  IconContainer,
  TextContainer,
  Icon,
  Title,
  Paragraph,
} from "./IconsSection.elements";

export default function IconsSection({ mobile, whenText, opsDays }) {
  let stringToReplace = "";

  whenText ? (stringToReplace = whenText.search("<ul><li>")) : "";

  whenText ? whenText.replace(stringToReplace, whenText) : "";

  return (
    <IconsSectionWrapper>
      <IconContainer>
        <Icon>
          <i className="mobile icon align" />
        </Icon>
        <TextContainer>
          <Title>
            Voucher Mobile
            {mobile === "MOBILE" ? "disponibile" : "non disponibile"}
          </Title>
          <Paragraph>
            {mobile
              ? "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore"
              : "non disponibile"}
          </Paragraph>
        </TextContainer>
      </IconContainer>
      <IconContainer>
        <Icon>
          <i className="calendar alternate icon align" />
        </Icon>
        <TextContainer>
          <Title>
            Operational days {opsDays ? opsDays : "non disponibile"}
          </Title>
          <Paragraph>{whenText}</Paragraph>
        </TextContainer>
      </IconContainer>
    </IconsSectionWrapper>
  );
}
