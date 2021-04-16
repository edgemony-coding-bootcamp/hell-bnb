import { PhotoCounterWrapper, PhotoCounterNum } from './PhotoCounter.elements'

function PhotoCounter({ counter, totalPhoto }) {
  return
  ;<PhotoCounterWrapper>
    <PhotoCounterNum>{counter}</PhotoCounterNum>
    <PhotoCounterNum>{totalPhoto} &nbsp; / &nbsp;</PhotoCounterNum>
  </PhotoCounterWrapper>
}

export default PhotoCounter
