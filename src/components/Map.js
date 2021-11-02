import React from "react";
import "../../src/styles/Map/Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SetView } from "./SetView";
import * as L from "leaflet";

export const Map = ({ cords }) => {
  const blackIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  return (
    <>
      <MapContainer
        id="mapid"
        center={[0, 0]}
        zoom={14}
        scrollWheelZoom={false}
        touchZoom = "center"
        tap = "true"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetView position={[cords.lat, cords.lng]} />
        <Marker position={[cords.lat, cords.lng]} icon={blackIcon}>
          <Popup>
            Ip location.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
