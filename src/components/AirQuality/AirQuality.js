import React, { Component } from 'react'
import good from '../../img/0-50face.png';
import moderate from '../../img/51-100face.png';
import bad from '../../img/101-150face.png';
import extreme from '../../img/151>face.png';


export default class AirQuality extends Component {
    getFace() {
        if (this.props.aqi <=50) {
            return <img src={good} alt='good face' className='aqiFace-white' />;
        } else if (this.props.aqi  > 50 && this.props.aqi <= 100) {
            return <img src={moderate} alt='moderate face' className='aqiFace-black'/>;
        } else if (this.props.aqi  > 100 && this.props.aqi <=150) {
            return <img src={bad} alt='bad face' className='aqiFace-white'/>;
        } else if (this.props.aqi  > 150) {
            return <img src={extreme} alt='extreme face' className='aqiFace-white'/>;
        }
    };

  render() {
    return (
      <div>
        <h1>{this.props.city}</h1>
        <h1 className='aqi'>{this.props.aqi}</h1>
        <h3 className='subtitle'>Current AQI Air Quality</h3>
        <br />
        {this.getFace(this.props.aqi)}
      </div>
    )
  }
}
