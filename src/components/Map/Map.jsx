import React from "react";
import {
  SectionHeader,
  SectionContainer,
  MapWindow,
  MapContainer,
  MapWindowInfo,
  InfoHeader,
  InfoDesc,
} from "./Map.elements";
import GoogleMap from "./GoogleMap";

export default function Map() {
  return (
    <SectionContainer>
      <SectionHeader>Dove ti troverai</SectionHeader>
      <MapWindow>
        <MapContainer>
          <GoogleMap />
        </MapContainer>
        <MapWindowInfo>
          <InfoHeader>Dove ci incontreremo</InfoHeader>
          <InfoDesc>Dummy Address, Zurigo</InfoDesc>
        </MapWindowInfo>
      </MapWindow>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
        quibusdam maxime beatae quas nihil enim quidem laudantium, corporis
        error laboriosam minus qui tempore? At ullam voluptatem excepturi
        laborum perspiciatis soluta?
      </span>
    </SectionContainer>
  );
}
