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

function PhotoPreview({ toggleModal, activitiesMedia }) {
  // const { url } = activitiesMedia;

  // const images = activitiesMedia.map((activity) => activity.url);

  return (
    <PhotoPreviewContainer>
      <PhotoPreviewSubContainer>
        <ImageWrapper>
          <FullHeightImage src={activitiesMedia[0].url} alt="no-image" />
          <FullHeightImage src={activitiesMedia[1].url} alt="no-image" hidden />
          <ImageColumnContainer>
            <HalfHeightImage src={activitiesMedia[2].url} alt="no-image" />

            <HalfHeightImage src={activitiesMedia[3].url} alt="no-image" />
          </ImageColumnContainer>

          <FullHeightImage src={activitiesMedia[4].url} alt="no-image" hidden />
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
