import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './../App.css'

const Map = ({mapCenter}) => {
    return (
    <div className="mapContainer">
    <MapContainer center={mapCenter} zoom={13} scrollWheelZoom={false} className="map">
    <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
    <Marker position={mapCenter}>
      <Popup>
       location of user
      </Popup>
    </Marker>
  </MapContainer>
  </div>
  )
}

export default Map