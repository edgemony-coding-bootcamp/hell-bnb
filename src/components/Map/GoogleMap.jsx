import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { containerStyle } from "./Map.elements";
import apiKey from "../../assets/googleApiKey";

function MyComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const { latitude, longitude } = props;
  const center = {
    lat: latitude,
    lng: longitude,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
      <Marker
        position={center}
        icon={{
          url: "https://img.icons8.com/color/48/000000/marker--v1.png",
          scaledSize: { width: 60, height: 60 },
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
