import {
  PhotoPreview_Wrapper,
  ImageWrapper,
  Image,
  ImageColumnWrap,
} from './PhotoPreview.elements'
import { BtnCookies } from '../BannerCookies/style'

import device from '../../assets/breakpoints'

function PhotoPreview({ openModal }) {
  return (
    <PhotoPreview_Wrapper>
      <ImageWrapper>
        <Image
          src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='yo'
          height={true}
          width={true}
        />
        <ImageColumnWrap>
          <Image
            src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='yo'
            top={true}
          />
          <Image
            src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='yo'
            bottom={true}
          />
        </ImageColumnWrap>

        <Image
          display={true}
          src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        />
        <Image
          display={true}
          src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        />
      </ImageWrapper>
      <BtnCookies onClick={() => openModal()}>CIAOOOO</BtnCookies>
    </PhotoPreview_Wrapper>
  )
}

// onClick={() => setVisibleBanner()}

export default PhotoPreview
