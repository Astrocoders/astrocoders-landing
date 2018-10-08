import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import leaflet from 'leaflet'
import logo from '../img/logo.png'

import 'leaflet/dist/leaflet.css'

const image =
  Object.keys(leaflet).length === 0
    ? null
    : new leaflet.Icon({
        iconRetinaUrl: logo,
        iconUrl: logo,
        shadowUrl: null,
        iconSize: [35, 35],
      })

const position = [-23.49916, -47.472592]

const AstroMap = () =>
  typeof window === 'undefined' ? null : (
    <Map center={position} zoom={16} scrollWheelZoom={false} tap={false} dragging={false}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/guilhermedecampo/cjms7c17419142smo2l4qddjv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VpbGhlcm1lZGVjYW1wbyIsImEiOiJjajIybzg5Y2MwMGxwMndvNzAydmkwZjR4In0.eefxu8F9Ay7LT3h_ypYz6w`}
      />
      <Marker position={position} icon={image} />
    </Map>
  )

export default AstroMap
