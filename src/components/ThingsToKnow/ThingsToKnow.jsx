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
  ModalListItem,
} from "./ThingsToKnow.elements";
import UpSlideModal from "./UpSlideModal";

export default function ThingsToKnow() {
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);
  const [isModalOpen, setisModalOpen] = useState(false);

  const [cancellationPolicyContent, setCancellationPolicyContent] = useState(
    false
  );
  const [guestsRequisiteContent, setGuestsRequisiteContent] = useState(false);
  const [whatToTakeContent, setWhatToTakeContent] = useState(false);

  const [modalCloseDirectives, setModalCloseDirectives] = useState({
    contentFunc: undefined,
    funcState: undefined,
  });

  function toggleModal(contentFunc, funcState) {
    if (isModalOpen) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }

    setisModalOpen(!isModalOpen);
    contentFunc(!funcState);
    setModalCloseDirectives({ contentFunc, funcState });
  }

  function mobileOpenModalBehaviour(contentFunc, funcState) {
    if (widthWindow < 768) {
      toggleModal(contentFunc, funcState);
    }
  }

  //   temp

  useEffect(() => {
    const handleResize = () => setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <InfoSection>
      {widthWindow >= 768 && <SectionTitle>Cose da sapere</SectionTitle>}

      <InfoWrapper>
        <InfoContainer
          onClick={() =>
            mobileOpenModalBehaviour(
              setCancellationPolicyContent,
              cancellationPolicyContent
            )
          }
        >
          <InfoSubContainer>
            <InfoTitle>Termini di cancellazione</InfoTitle>
            <InfoParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nisi architecto consequatur?
            </InfoParagraph>
          </InfoSubContainer>
          <LinkContainer>
            {widthWindow >= 768 && (
              <InfoLink
                reindexLDisplay
                href="https://www.airbnb.it/experiences"
                target="_blank"
              >
                Per saperne di piu
              </InfoLink>
            )}
            <i
              className={`${
                widthWindow >= 768 ? "small " : ""
              }chevron right icon`}
            />
          </LinkContainer>
        </InfoContainer>
        <InfoContainer
          onClick={() =>
            mobileOpenModalBehaviour(
              setGuestsRequisiteContent,
              guestsRequisiteContent
            )
          }
        >
          <InfoSubContainer>
            <InfoTitle>Requisiti degli ospiti</InfoTitle>
            <InfoParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </InfoParagraph>
          </InfoSubContainer>
          <LinkContainer
            onClick={() =>
              toggleModal(setGuestsRequisiteContent, guestsRequisiteContent)
            }
          >
            {widthWindow >= 768 && <InfoLink href="">Mostra altro</InfoLink>}
            <i
              className={`${
                widthWindow >= 768 ? "small " : ""
              }chevron right icon`}
            />
          </LinkContainer>
        </InfoContainer>
        <InfoContainer
          onClick={() =>
            mobileOpenModalBehaviour(setWhatToTakeContent, whatToTakeContent)
          }
        >
          <InfoSubContainer>
            <InfoTitle>Cosa portare</InfoTitle>
            {widthWindow >= 768 && <InfoParagraph>Camera</InfoParagraph>}
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
      <UpSlideModal
        modalOpen={isModalOpen}
        toggleModal={toggleModal}
        widthWindow={widthWindow}
        buttonDirectives={modalCloseDirectives}
      >
        {cancellationPolicyContent && (
          <>
            <SectionTitle modalType>Termini di cancellazione</SectionTitle>

            <InfoParagraph modalType>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              molestias numquam quaerat impedit veniam ex velit inventore aut
              doloribus laborum?
            </InfoParagraph>

            <InfoLink href="">Mostra i termini</InfoLink>
          </>
        )}

        {guestsRequisiteContent && (
          <>
            <SectionTitle modalType>Requisiti degli ospiti</SectionTitle>

            <InfoParagraph modalType>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              molestias numquam quaerat impedit veniam ex velit inventore aut
              doloribus laborum?
            </InfoParagraph>

            <InfoParagraph modalType>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              molestias numquam quaerat impedit veniam ex velit inventore aut
              doloribus laborum?
            </InfoParagraph>

            <InfoParagraph modalType>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              molestias numquam quaerat impedit veniam ex velit inventore aut
              doloribus laborum?
            </InfoParagraph>

            <InfoParagraph modalType>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              molestias numquam quaerat impedit veniam ex velit inventore aut
              doloribus laborum?
            </InfoParagraph>
          </>
        )}

        {whatToTakeContent && (
          <>
            <SectionTitle modalType>Cosa portare</SectionTitle>

            <ul>
              <ModalListItem>
                <i className="check circle outline icon" />
                <InfoParagraph listType modalType>
                  Camera
                </InfoParagraph>
              </ModalListItem>
              <ModalListItem>
                <i className="check circle outline icon" />
                <InfoParagraph listType modalType>
                  Zucchine
                </InfoParagraph>
              </ModalListItem>
            </ul>
          </>
        )}
      </UpSlideModal>
    </InfoSection>
  );
}
