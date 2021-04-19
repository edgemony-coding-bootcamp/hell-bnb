import React from "react";

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
import footerData from "./footerData";

const footerSections = footerData.sections;
const { companyDetails } = footerData;
const disclosureLinks = companyDetails.disclosure;
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <FooterContainer>
      <TopFooterSections>
        {footerSections.map((section, index) => {
          const { sectionName, listItems } = section;
          const sectionKey = `${section}_${index}`;
          return (
            <FooterSection key={sectionKey}>
              <FooterSectionSubHeading>{sectionName}</FooterSectionSubHeading>
              <LinksWrapper>
                {listItems.map((item, i) => {
                  const itemsKey = `${item}_${i}`;
                  const { title, link } = item;
                  return (
                    <FooterLink key={itemsKey}>
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
          <i className="facebook f icon" />
          <i className="twitter icon" />
          <i className="instagram icon" />
        </IconContainer>
        <CompanyDetails>
          © {currentYear} {companyDetails.companyName}
        </CompanyDetails>
        <CompanyDetails>
          {disclosureLinks.map((element, i) => {
            const disclosureLinkKey = `${element}_${i}`;
            const { title, link } = element;
            if (i + 1 < disclosureLinks.length) {
              return (
                <FooterLinkUrl key={disclosureLinkKey} href={link}>
                  {`${title} ·`}
                </FooterLinkUrl>
              );
            }
            return (
              <FooterLinkUrl key={disclosureLinkKey} href={link}>
                {title}
              </FooterLinkUrl>
            );
          })}
        </CompanyDetails>
      </FooterBottomSection>
    </FooterContainer>
  );
}
