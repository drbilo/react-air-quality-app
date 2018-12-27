import React, { Component } from 'react';
import './App.css';

import Search from "./components/Search/Search";
import AirQuality from "./components/AirQuality/AirQuality";
import Map from "./components/MapTile/MapTile";
import Detail from "./components/Detail/Detail";
import Head from "./components/Head/Head";

const API_KEY = "5525712176a6309f7132c2a668df1c0a951b32c2";

class App extends Component {
  state = {
    city: 'bangkok',
    aqi: undefined,
    pm25: undefined,
    pm10: undefined,
    temp: undefined,
    geo: undefined,
    zoom: 12,
  }

  updateState = async (e) => {
    var city = this.state.city;

    if (e) {
      e.preventDefault();
      city = e.target.elements.city.value;
    }

    const api_call = await fetch(`https://api.waqi.info/feed/${city}/?token=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    if (data.status === "ok") {
      this.setState({
        city: data.data.city.name,
        aqi: data.data.aqi,
        pm25: (data.data.iaqi.pm25) ? data.data.iaqi.pm25.v : 'No Data',
        pm10: (data.data.iaqi.pm10) ? data.data.iaqi.pm10.v : 'No Data',
        temp: (data.data.iaqi.t) ? data.data.iaqi.t.v + '°C' : 'No Data',
        geo: data.data.city.geo,
      });
    } else {
      this.setState({
        city: 'City Not Found',
        aqi: 0,
        pm25: 0,
        pm10: 0,
        temp: 0,
        geo: [0,0],
      });
    }
  }

  componentDidMount() {
    this.updateState();
  }

  render() {
    return (
      <div>
        <Head aqi={this.state.aqi} />
        <div className='container-fluid justify-content-center h-100'>
          <div className='row '>
            <div className='col'>
              <Search 
                updateState={this.updateState}
              />
            </div>
          </div>
          <div className='row h-100'>
            <div className='col-lg-4 h-100 d-flex flex-column'>
              <AirQuality 
                aqi={this.state.aqi}
                city={this.state.city}
              />
            </div>
            <div className='col-lg-8'>
              <div className='row'>
                <div className='col'>
                  <Detail 
                    type='PM25'
                    data={this.state.pm25}
                  />
                </div>
                <div className='col'>
                <Detail 
                    type='PM10'
                    data={this.state.pm10}
                />
                </div>
                <div className='col'>
                  <Detail 
                    type='Temperature'
                    data={this.state.temp}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <Map 
                    geo={this.state.geo}
                    zoom={this.state.zoom}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
