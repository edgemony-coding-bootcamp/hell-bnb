import React from "react";
import {
  PhotoPreviewWrapper,
  ImageWrapper,
  ImageRowWrapper,
  ImageColumnContainer,
  ImageRow,
  ImageColumn,
  ShowBtn,
} from "./PhotoPreview.elements";

function PhotoPreview({ openModal }) {
  return (
    <>
      <PhotoPreviewWrapper>
        <ImageWrapper>
          <ImageRowWrapper>
            <ImageRow
              src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-media_library/original/1ad97a42-0606-4401-a631-aa88b6acdd77.jpeg?im_w=240"
              alt="no-image"
              left
            />
            <ImageRow
              src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-media_library/original/f37ea5bd-37d2-436e-953d-73cb93f6c030.jpeg?im_w=240"
              alt="no-image"
              hidden
              zero
            />
            <ImageColumnContainer>
              <ImageColumn
                src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-active_media/original/670ddd5a-d08d-4d23-a002-ca240d562b0b.jpeg?im_w=240"
                alt="no-image"
                topRight
                zero
              />

              <ImageColumn
                src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-media_library/original/797cb9f5-cd90-4bc6-9688-f6407fb4b384.jpeg?im_w=240"
                alt="no-image"
                top
                zero
              />
            </ImageColumnContainer>

            <ImageRow
              src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-active_media/original/85368d46-21b2-4c07-924a-ac99dfe19d82.jpeg?im_w=320"
              alt="no-image"
              hidden
            />
          </ImageRowWrapper>
        </ImageWrapper>
        <ShowBtn hide onClick={() => openModal()}>
          <i className="expand arrows alternate icon" /> Mostra tutte le 5 foto
        </ShowBtn>
      </PhotoPreviewWrapper>
    </>
  );
}

export default PhotoPreview;
