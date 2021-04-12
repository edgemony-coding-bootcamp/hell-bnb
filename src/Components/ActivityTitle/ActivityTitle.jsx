import {
  ActivityTitle_Wrapper,
  ActivityTitle_H1Wrap,
  ActivityTitle_H1,
  RatingWrapper,
  Star_Icon,
  Location_Anchor,
  RatingVote,
  RatingNumbers,
  RatingDot,
  ShareIcon,
  ShareButton,
  Span,
} from './styles'

function ActivityTitle() {
  return (
    <ActivityTitle_Wrapper>
      <ActivityTitle_H1Wrap>
        <ActivityTitle_H1>Lezione di danza e cultura balinese</ActivityTitle_H1>
      </ActivityTitle_H1Wrap>
      <RatingWrapper>
        <Star_Icon className='star icon' />
        <RatingVote>5.0</RatingVote>
        <RatingNumbers>(57)</RatingNumbers>
        <RatingDot>·</RatingDot>
        <Location_Anchor href='https://www.google.it/'>
          Semarapura, Indonesia
        </Location_Anchor>
        <ShareButton type='button'>
          <ShareIcon className='share square icon'></ShareIcon>
          <Span>Condividi</Span>
        </ShareButton>
      </RatingWrapper>
    </ActivityTitle_Wrapper>
  )
}

export default ActivityTitle
