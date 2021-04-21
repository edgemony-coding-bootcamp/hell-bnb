import React from "react";
import { GoogleApiWrapper, Marker } from "google-maps-react";
import { GoogleMap as Map } from "./Map.elements";

function MapContainer(props) {
  const { google } = props;

  return (
    <Map
      google={google}
      zoom={16}
      initialCenter={{
        lat: 38.0337,
        lng: 14.0174,
      }}
    >
      <Marker
        name="Sticazzi"
        position={{ lat: 38.034, lng: 14.0174 }}
        icon={{
          url:
            "https://icons-for-free.com/iconfiles/png/512/location+maker+map+icon-1320166084997417306.png",
          scaledSize: { width: 30, height: 30 },
        }}
        //   Personalizzabile
      />
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
})(MapContainer);
