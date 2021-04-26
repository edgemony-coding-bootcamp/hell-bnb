import React from "react";
import {
  PhotoPreviewContainer,
  PhotoPreviewSubContainer,
  ImageWrapper,
  ImageColumnContainer,
  FullHeightImage,
  HalfHeightImage,
  OpenModalBtn,
  IconContainer,
} from "./PhotoPreview.elements";

function PhotoPreview({ toggleModal }) {
  return (
    <PhotoPreviewContainer>
      <PhotoPreviewSubContainer>
        <ImageWrapper>
          <FullHeightImage
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-media_library/original/1ad97a42-0606-4401-a631-aa88b6acdd77.jpeg?im_w=240"
            alt="no-image"
          />
          <FullHeightImage
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-media_library/original/f37ea5bd-37d2-436e-953d-73cb93f6c030.jpeg?im_w=240"
            alt="no-image"
            hidden
          />
          <ImageColumnContainer>
            <HalfHeightImage
              src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-active_media/original/670ddd5a-d08d-4d23-a002-ca240d562b0b.jpeg?im_w=240"
              alt="no-image"
            />

            <HalfHeightImage
              src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-media_library/original/797cb9f5-cd90-4bc6-9688-f6407fb4b384.jpeg?im_w=240"
              alt="no-image"
            />
          </ImageColumnContainer>

          <FullHeightImage
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-active_media/original/85368d46-21b2-4c07-924a-ac99dfe19d82.jpeg?im_w=320"
            alt="no-image"
            hidden
          />
        </ImageWrapper>

        <OpenModalBtn hide onClick={() => toggleModal()}>
          <IconContainer>
            <i className="expand arrows alternate icon" />
          </IconContainer>{" "}
          Mostra tutte le 5 foto
        </OpenModalBtn>
      </PhotoPreviewSubContainer>
    </PhotoPreviewContainer>
  );
}

export default PhotoPreview;
