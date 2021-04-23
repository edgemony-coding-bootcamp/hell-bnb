import React from "react";
import {
  BreadcrumpContainer,
  AnchorTag,
  Icon,
  ActivityType,
} from "./Breadcrump.elements";

export default function Breadcrump() {
  return (
    <BreadcrumpContainer>
      <AnchorTag href="#">
        citta, Paese
        <Icon>
          <i className="small chevron right icon" />
        </Icon>
      </AnchorTag>
      <AnchorTag href="#">
        categoria
        <Icon>
          <i className="small chevron right icon" />
        </Icon>
      </AnchorTag>
      <ActivityType>attivita</ActivityType>
    </BreadcrumpContainer>
  );
}
