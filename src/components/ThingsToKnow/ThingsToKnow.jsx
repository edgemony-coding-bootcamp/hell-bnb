import React, { useState, useEffect } from "react";
import {
  InfoContainer,
  InfoSubContainer,
  InfoTitle,
  InfoParagraph,
  InfoWrapper,
  LinkContainer,
  SectionTitle,
  InfoLink,
  InfoSection,
} from "./ThingsToKnow.elements";

export default function ThingsToKnow() {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  console.log(widthWindow);

  return (
    <InfoSection>
      {widthWindow > 768 && (
        <div>
          <SectionTitle>Cose da sapere</SectionTitle>
        </div>
      )}

      <InfoWrapper>
        <InfoContainer>
          <InfoSubContainer>
            <InfoTitle>Termini di cancellazione</InfoTitle>
            <InfoParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nisi architecto consequatur?
            </InfoParagraph>
          </InfoSubContainer>
          <LinkContainer>
            {widthWindow > 768 && (
              <InfoLink href="https://www.airbnb.it/experiences">
                Per saperne di piu
              </InfoLink>
            )}
            <i
              className={`${widthWindow > 768 && "small "}chevron right icon`}
            />
          </LinkContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoSubContainer>
            <InfoTitle>Requisiti degli ospiti</InfoTitle>
            <InfoParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </InfoParagraph>
          </InfoSubContainer>
          <LinkContainer>
            {widthWindow > 768 && (
              <InfoLink href="https://www.airbnb.it/experiences">
                Mostra altro
              </InfoLink>
            )}
            <i
              className={`${widthWindow > 768 && "small "}chevron right icon`}
            />
          </LinkContainer>
        </InfoContainer>
        <InfoContainer>
          <InfoSubContainer>
            <InfoTitle>Cosa portare</InfoTitle>
            {widthWindow > 768 && <InfoParagraph>Camera</InfoParagraph>}
          </InfoSubContainer>
          <LinkContainer>
            {widthWindow < 768 && <i className="chevron right icon" />}
          </LinkContainer>
        </InfoContainer>
        {widthWindow < 768 && (
          <InfoContainer>
            <InfoSubContainer>
              <i className="font awesome flag icon" />
              <InfoLink mobileLink href="https://www.airbnb.it/experiences">
                Segnala questa esperienza
              </InfoLink>
            </InfoSubContainer>
          </InfoContainer>
        )}
      </InfoWrapper>
    </InfoSection>
  );
}
