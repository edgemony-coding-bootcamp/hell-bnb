import {
  FooterContainer,
  FooterSection,
  FooterSectionSubHeading,
  LinksWrapper,
  FooterLink,
  FooterLinkUrl,
  CompanyDetails,
} from "./Footer.elements";
import { footerData } from "./footerData";

const footerSections = footerData.sections;
const companyDetails = footerData.companyDetails;
const disclosureLinks = companyDetails.disclosure;
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <FooterContainer>
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

      <FooterSection>
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
      </FooterSection>
    </FooterContainer>
  );
}
