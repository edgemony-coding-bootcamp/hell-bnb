import React from "react";
import {
  SectionHeader,
  SectionContainer,
  SubContainer,
  MapWindow,
  MapContainer,
  MapWindowInfo,
  InfoHeader,
  InfoDesc,
  ActivityDescription,
} from "./Map.elements";
import GoogleMap from "./GoogleMap";

export default function Map() {
  return (
    <SectionContainer>
      <SubContainer>
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
        <ActivityDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          quibusdam maxime beatae quas nihil enim quidem laudantium, corporis
          error laboriosam minus qui tempore? At ullam voluptatem excepturi
          laborum perspiciatis soluta? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veniam harum voluptatibus eaque magnam. Quae
          repellat, adipisci fugit nemo cupiditate autem.
        </ActivityDescription>
      </SubContainer>
    </SectionContainer>
  );
}
