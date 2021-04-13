import styled from "styled-components";
import device from "../../assets/Media_query_dimension";

const footerFont = "Helvetica";

export const FooterContainer = styled.main`
  width: 100vw;
  padding: 0 24px;
  background: #f7f7f7;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;

  @media ${device.deviceM} {
    padding: 0 40px;
  }

  @media ${device.deviceXL} {
    padding: 0 80px;
  }
`;

export const FooterSection = styled.section`
  width: 100%;
  padding: 32px 0;
  border-bottom: 1px solid #dddddd;
  padding: 32px 0;

  @media ${device.deviceM} {
    padding: 40px 0;
  }

  @media ${device.deviceXL} {
    padding: 48px 0;
    border-bottom: none;
    height: 100%;
  }
`;

export const TopFooterSections = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.deviceXL} {
    flex-direction: row;
    border-bottom: 1px solid #dddddd;
  }
`;

export const FooterBottomSection = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${device.deviceM} {
    min-width: 100%;
    padding: 40px 0;
  }

  @media ${device.deviceXL} {
    padding: 0;
    margin: 30px 0;
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

export const FooterSectionSubHeading = styled.h1`
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;
  font-family: ${footerFont};
`;

export const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;

  @media ${device.deviceM} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media ${device.deviceXL} {
    flex-direction: column;
    flex-wrap: no-wrap;
  }
`;

export const FooterLink = styled.li`
  width: 100%;
  font-size: 14px;
  font-family: ${footerFont};
  list-style: none;
  color: #484848;
  margin-top: 12px;

  @media ${device.deviceM} {
    width: 33%;
    padding-right: 10px;
    margin-top: 16px;
  }

  @media ${device.deviceXL} {
    width: 100%;
    margin-top: 22px;
  }
`;

export const FooterLinkUrl = styled.a`
  cursor: pointer;
  text-decoration: none;
  :visited,
  :active,
  :hover {
    text-decoration: inherit;
    color: inherit;
  }
`;

export const CompanyDetails = styled.div`
  width: 100%;
  font-size: 14px;
  font-family: ${footerFont};
  list-style: none;
  color: #484848;
  margin-top: 12px;
  text-align: left;

  @media ${device.deviceM} {
    text-align: center;
  }

  @media ${device.deviceXL} {
    margin-top: 0;
  }
`;

export const IconContainer = styled.div`
  display: hidden;
  justify-content: center;
  width: 100%;
  font-size: 30px;

  @media ${device.deviceM} {
    display: flex;
  }

  @media ${device.deviceXL} {
    font-size: 25px;
  }
`;
