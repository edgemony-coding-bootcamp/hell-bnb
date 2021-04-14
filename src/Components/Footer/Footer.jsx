import {
  FooterContainer,
  FooterSection,
  FooterSectionSubHeading,
  LinksWrapper,
  FooterLink,
  FooterLinkUrl,
  CompanyDetails,
  FooterBottomSection,
  TopFooterSections,
  IconContainer,
} from "./Footer.elements";
import { footerData } from "./footerData";

const footerSections = footerData.sections;
const companyDetails = footerData.companyDetails;
const disclosureLinks = companyDetails.disclosure;
const currentYear = new Date().getFullYear();
let viewportSize = window.innerWidth > 768;

export default function Footer() {
  return (
    <FooterContainer>
      <TopFooterSections>
        {footerSections.map((section, index) => {
          const { sectionName, listItems } = section;
          return (
            <FooterSection key={index}>
              <FooterSectionSubHeading>{sectionName}</FooterSectionSubHeading>
              <LinksWrapper>
                {listItems.map((item, i) => {
                  const { title, link } = item;
                  return (
                    <FooterLink key={i}>
                      <FooterLinkUrl href={link}>{title}</FooterLinkUrl>
                    </FooterLink>
                  );
                })}
              </LinksWrapper>
            </FooterSection>
          );
        })}
      </TopFooterSections>

      <FooterBottomSection>
        <IconContainer>
          <i className="facebook f icon"></i>
          <i className="twitter icon"></i>
          <i className="instagram icon"></i>
        </IconContainer>
        <CompanyDetails>
          © {currentYear} {companyDetails.companyName}
        </CompanyDetails>
        <CompanyDetails>
          {disclosureLinks.map((element, i) => {
            const { title, link } = element;
            if (i + 1 < disclosureLinks.length) {
              return (
                <FooterLinkUrl key={i} href={link}>
                  {title + " · "}
                </FooterLinkUrl>
              );
            } else {
              return (
                <FooterLinkUrl key={i} href={link}>
                  {title}
                </FooterLinkUrl>
              );
            }
          })}
        </CompanyDetails>
      </FooterBottomSection>
    </FooterContainer>
  );
}
