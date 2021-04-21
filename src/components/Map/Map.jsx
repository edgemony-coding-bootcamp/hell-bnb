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

export default function Map({ activityData }) {
  const { latitude, longitude, city } = activityData;
  const country = city.country.name;

  return (
    <SectionContainer>
      <SubContainer>
        <SectionHeader>Dove ti troverai</SectionHeader>
        <MapWindow>
          <MapContainer>
            <GoogleMap lat={latitude} lng={longitude} />
          </MapContainer>
          <MapWindowInfo>
            <InfoHeader>Dove ci incontreremo</InfoHeader>
            <InfoDesc>
              {city.name}, {country}
            </InfoDesc>
          </MapWindowInfo>
        </MapWindow>
        <ActivityDescription>{activityData.meeting_point}</ActivityDescription>
      </SubContainer>
    </SectionContainer>
  );
}
