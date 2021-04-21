import React, { useState } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { GoogleMap as Map } from "./Map.elements";

function MapContainer(props) {
  const [state, setState] = useState({
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
  });

  const { google } = props;
  const { activeMarker, showingInfoWindow, selectedPlace } = state;

  const onMarkerClick = (marker) =>
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  const onClose = () => {
    if (showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  return (
    <Map
      google={google}
      zoom={18}
      initialCenter={{
        lat: 38.0337,
        lng: 14.0174,
      }}
      // containerStyle={containerStyle}
    >
      <Marker onClick={onMarkerClick} name="Comune di Cefalù" />
      <Marker
        onClick={onMarkerClick}
        name="Sticazzi"
        position={{ lat: 38.034, lng: 14.0174 }}
        icon={{
          url:
            "https://icons-for-free.com/iconfiles/png/512/location+maker+map+icon-1320166084997417306.png",
          scaledSize: { width: 30, height: 30 },
        }}
        //   Personalizzabile
      />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
        onClose={onClose}
      >
        <div>
          <h4>{selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
})(MapContainer);
