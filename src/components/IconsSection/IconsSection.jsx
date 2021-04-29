import React from "react";
import {
  IconsSectionWrapper,
  IconContainer,
  TextContainer,
  Title,
  Paragraph,
} from "./IconsSection.elements";

export default function IconsSection() {
  return (
    <IconsSectionWrapper>
      <IconContainer>
        <i className="mobile icon align" />
        <TextContainer>
          <Title>
            Voucher Mobile disponibile
            {/* Voucher Mobile {apikeyTRUE ? "disponibile" : "non disponibile"} */}
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
            eiusmod tempor incidunt
          </Paragraph>
        </TextContainer>
      </IconContainer>
      <IconContainer>
        <i className="calendar alternate icon align" />
        <TextContainer>
          <Title>
            Operational days
            {/* {whenText APIKEYS} */}
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do
            eiusmod tempor incidunt
          </Paragraph>
        </TextContainer>
      </IconContainer>
    </IconsSectionWrapper>
  );
}
