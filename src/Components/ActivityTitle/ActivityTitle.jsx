import {
  ActivityTitle_Wrapper,
  ActivityTitle_H1,
  ShareButton,
  Span,
  RankingWrap,
} from './styles'

import Rank from '../ActivityCard/Rank'

function ActivityTitle({ title, rate, number, country }) {
  return (
    <ActivityTitle_Wrapper>
      <ActivityTitle_H1>
        Lezione di danza e cultura balinese{title}
      </ActivityTitle_H1>
      <RankingWrap>
        <Rank
          light={false}
          underline={true}
          bold={true}
          margin={true}
          rate={rate}
          number={number}
          country={country}
        />
        <ShareButton type='button'>
          <i className='share square icon' />
          <Span>Condividi</Span>
        </ShareButton>
      </RankingWrap>
    </ActivityTitle_Wrapper>
  )
}

export default ActivityTitle
