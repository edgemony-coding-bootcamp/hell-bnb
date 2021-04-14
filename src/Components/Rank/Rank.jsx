import { RateWrapper, Rate, Country } from "./Rank.elements.js";

export const Rank = ({ rate, number, country, light, underline }) => {
  return (
    <RateWrapper>
      <i className="red star icon" />
      <Rate>{rate}</Rate>
      <Rate light>({number}) ·&nbsp;</Rate>
      <Country light={light} underline={underline}>
        {" "}
        {country}
      </Country>
    </RateWrapper>
  );
};
export default Rank;
