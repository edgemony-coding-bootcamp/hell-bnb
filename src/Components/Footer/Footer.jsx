import {
  FooterContainer,
  FooterSection,
  FooterSectionSubHeading,
  LinksWrapper,
  FooterLink,
  FooterLinkUrl,
} from "./Footer.elements";
import { footerData } from "./footerData";

const footerSections = footerData.sections;

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
    </FooterContainer>
  );
}
