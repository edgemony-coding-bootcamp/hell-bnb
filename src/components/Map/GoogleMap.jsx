import React from "react";
import { GoogleApiWrapper, Marker } from "google-maps-react";
import { GoogleMap as Map } from "./Map.elements";

function MapContainer(props) {
  const { google, lat, lng } = props;

  return (
    <Map
      google={google}
      zoom={16}
      initialCenter={{
        lat,
        lng,
      }}
    >
      <Marker
        position={{
          lat,
          lng,
        }}
        icon={{
          url: "https://img.icons8.com/color/48/000000/marker--v1.png",
          scaledSize: { width: 60, height: 60 },
        }}
      />
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
})(MapContainer);
