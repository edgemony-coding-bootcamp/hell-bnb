import {
  PhotoPreview_Wrapper,
  ImageWrapper,
  Image,
  ImageColumnWrap,
} from './PhotoPreview.elements'
import { BtnCookies } from '../BannerCookies/style'

import device from '../../assets/breakpoints'

function PhotoPreview({ openModal, display, top, bottom, zero, left }) {
  return (
    <PhotoPreview_Wrapper>
      <ImageWrapper>
        <Image
          src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='yo'
          height={true}
          width={true}
          display={display}
        />
        <Image
          src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='yo'
          height={true}
          width={true}
          none={true}
          zero={zero}
        />
        <ImageColumnWrap>
          <Image
            src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='yo'
            top={top}
            display={display}
            zero={zero}
          />

          <Image
            src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='yo'
            bottom={bottom}
            zero={zero}
            display={display}
          />
        </ImageColumnWrap>

        <Image
          src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='yo'
          height={true}
          width={true}
          none={true}
          bottom={true}
          left={true}
        />
      </ImageWrapper>
      <BtnCookies onClick={() => openModal()}>CIAOOOO</BtnCookies>
    </PhotoPreview_Wrapper>
  )
}

// onClick={() => setVisibleBanner()}

export default PhotoPreview
