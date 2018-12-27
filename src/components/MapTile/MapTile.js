import React, { Component } from 'react'
import { Map, TileLayer} from 'react-leaflet';

export default class MapTile extends Component<{}, State> {
  render() {
    const position = this.props.geo;
    return (
      <div>
        <Map className="mapId" center={position} zoom={this.props.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <TileLayer
            attribution='Air  Quality  Tiles &amp;copy <a  href="http://waqi.info">waqi.info</a>'
            url="https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=5525712176a6309f7132c2a668df1c0a951b32c2"  
          />
        </Map>
      </div>
    )
  }
}