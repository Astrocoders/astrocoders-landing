import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../img/logo.png'),
  iconUrl: require('../img/logo.png'),
  shadowUrl: null,
  iconSize: [35, 35],
})

const position = [-23.49916, -47.472592]

export default () => (
  <Map center={position} zoom={16} scrollWheelZoom={false}>
    <TileLayer
      url={`https://api.mapbox.com/styles/v1/guilhermedecampo/cjms7c17419142smo2l4qddjv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VpbGhlcm1lZGVjYW1wbyIsImEiOiJjajIybzg5Y2MwMGxwMndvNzAydmkwZjR4In0.eefxu8F9Ay7LT3h_ypYz6w`}
    />
    <Marker position={position} />
  </Map>
)
