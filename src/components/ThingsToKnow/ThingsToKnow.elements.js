import styled from "styled-components";
import colors from "../../assets/colors";
import device from "../../assets/breakpoints";

export const InfoSection = styled.section`
  border-bottom: 1px solid ${colors.borderColor};

  @media ${device.deviceM} {
    border-top: 1px solid ${colors.borderColor};
    padding: 48px 0;
  }
`;

export const SectionTitle = styled.h3`
  font-family: "Helvetica";
  font-size: 20px;
  color: ${colors.darkText};
  margin-bottom: 0;
`;

export const InfoWrapper = styled.div`
  @media ${device.deviceL} {
    display: flex;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  border-top: 1px solid ${colors.borderColor};
  align-items: center;

  @media ${device.deviceM} {
    flex-direction: column;
    align-items: flex-start;
    border-top: unset;
    padding: 0;
    padding-top: 24px;
  }

  @media ${device.deviceL} {
    width: 33.3%;
    padding-right: 20px;
  }
`;

export const InfoSubContainer = styled.div`
  text-justify: center;
`;

export const InfoTitle = styled.h4`
  font-family: "Helvetica";
  font-size: 20px;
  color: ${colors.darkText};
  margin-bottom: 0;

  @media ${device.deviceM} {
    font-size: 16px;
  }
`;

export const InfoParagraph = styled.p`
  margin-top: 8px;
  color: ${colors.lightText};

  @media ${device.deviceM} {
    margin-top: 14px;
    font-size: 16px;
  }
`;

export const LinkContainer = styled.div`
  @media ${device.deviceM} {
    margin-top: 18px;
    font-size: 16px;
  }
`;

export const InfoLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
  font-size: ${(props) => (props.mobileLink ? "16px" : "14px")};

  color: ${colors.darkText};
  :visited {
    color: ${colors.lightText};
  }
  :active,
  :hover {
    color: ${colors.darkText};
  }
`;
