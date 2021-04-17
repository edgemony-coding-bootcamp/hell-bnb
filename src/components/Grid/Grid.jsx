import {
  Grid_Wrapper,
  ImageWrapper,
  Image,
  ImageColumnWrap,
} from './Grid.elements'
import { BtnCookies } from '../BannerCookies/style'

function Grid({ openModal, display, top, bottom, grow }) {
  return (
    <Grid_Wrapper>
      <ImageWrapper>
        <Image
          src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='yo'
          height={true}
          width={true}
          display={display}
          grow={grow}
        />
        <Image
          src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='yo'
          height={true}
          width={true}
          none={true}
          grow={grow}
        />
        <ImageColumnWrap>
          <Image
            src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='yo'
            top={top}
            display={display}
          />

          <Image
            src='https://images.pexels.com/photos/2613949/pexels-photo-2613949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='yo'
            bottom={bottom}
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
          grow={grow}
        />
      </ImageWrapper>
      <BtnCookies onClick={() => openModal()}>CIAOOOO</BtnCookies>
    </Grid_Wrapper>
  )
}

// onClick={() => setVisibleBanner()}

export default Grid
