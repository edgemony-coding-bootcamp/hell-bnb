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
  const topFivePhotoPreview = activitiesMedia.slice(0, 6);
  return (
    <>
      {activitiesMedia.length > 0 ? (
        <>
          <PhotoPreviewContainer>
            <PhotoPreviewSubContainer>
              <ImageWrapper>
                {topFivePhotoPreview.map((singleMedia, index) => {
                  const activitiesMediaColumn = activitiesMedia.slice(2, 4);
                  return (
                    <>
                      {singleMedia.url && (
                        <>
                          {index < 2 || index > 3 ? (
                            <FullHeightImage
                              src={singleMedia.url}
                              alt="no-image"
                            />
                          ) : (
                            <>
                              {index === 2 && (
                                <ImageColumnContainer>
                                  {activitiesMediaColumn.map((columnMedia) => {
                                    return (
                                      <HalfHeightImage
                                        src={columnMedia.url}
                                        alt="no-image"
                                      />
                                    );
                                  })}
                                </ImageColumnContainer>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  );
                })}
              </ImageWrapper>

              <OpenModalBtn hide onClick={() => toggleModal()}>
                <IconContainer>
                  <i className="expand arrows alternate icon" />
                </IconContainer>{" "}
                Mostra tutte le 5 foto
              </OpenModalBtn>
            </PhotoPreviewSubContainer>
          </PhotoPreviewContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default PhotoPreview;
