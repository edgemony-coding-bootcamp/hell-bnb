import ActivityTitle from '../Components/ActivityTitle/ActivityTitle'

function Activity({ title, rate, number, country }) {
  return (
    <ActivityTitle
      title={title}
      rate={rate}
      number={number}
      country={country}
    />
  )
}

export default Activity
