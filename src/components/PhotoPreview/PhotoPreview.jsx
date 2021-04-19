import {
  PhotoPreviewWrapper,
  ImageWrapper,
  ImageRowWrapper,
  ImageColumnWrap,
  ImageRow,
  ImageColumn,
  ShowBtn,
} from './PhotoPreview.elements';
import { BtnCookies } from '../BannerCookies/style';

function PhotoPreview({ openModal, display, top, bottom, zero }) {
  return (
    <>
      <PhotoPreviewWrapper>
        <ImageWrapper>
          <ImageRowWrapper>
            <ImageRow
              src="https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="no-image"
              height={true}
              width={true}
              left={true}
              display={display}
            />
            <ImageRow
              src="https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="no-image"
              height={true}
              width={true}
              none={true}
              zero={zero}
            />
            <ImageColumnWrap>
              <ImageColumn
                src="https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="no-image"
                top={top}
                display={display}
                zero={zero}
              />

              <ImageColumn
                src="https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="no-image"
                bottom={bottom}
                zero={zero}
                display={display}
              />
            </ImageColumnWrap>

            <ImageRow
              src="https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="no-image"
              height={true}
              width={true}
              none={true}
              bottom={true}
            />
          </ImageRowWrapper>
        </ImageWrapper>
        <BtnCookies onClick={() => openModal()}>Show other photos</BtnCookies>
      </PhotoPreviewWrapper>
    </>
  );
}

export default PhotoPreview;
