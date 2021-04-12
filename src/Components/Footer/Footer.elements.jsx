import styled from "styled-components";

const footerFont = "Helvetica";

export const FooterContainer = styled.main`
  width: 100vw;
  padding: 0 24px;
  background: #f7f7f7;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-top: 1px solid #dddddd;

  /* testing purpose */
  margin-top: 50px;
  /* end testing */
`;

export const FooterSection = styled.section`
  width: 100%;
  padding: 32px 0;
  border-bottom: 1px solid #dddddd;
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
`;

export const FooterLink = styled.li`
  width: 100%;
  font-size: 14px;
  font-family: ${footerFont};
  list-style: none;
  color: #484848;
  margin-top: 12px;
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
`;
