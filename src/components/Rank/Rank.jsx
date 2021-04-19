import React from 'react'
import { RateWrapper, Rate, Country } from './Rank.elements'

const Rank = ({ rate, number, country, margin, light, underline }) => { (
    <RateWrapper>
      <i className='red star icon' />
      <Rate margin={margin}>{rate}</Rate>
      <Rate margin={margin} light={light}>
        ({number}) &nbsp; ·&nbsp;
      </Rate>
      <Country margin={margin} light={light} underline={underline}>
        {country}
      </Country>
    </RateWrapper>
  )
}
export default Rank
