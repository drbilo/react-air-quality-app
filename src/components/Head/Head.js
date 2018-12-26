import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Head extends Component {
  render() {
    let body;
    
    if (this.props.aqi <=50) {
        body = <body style="background-image: linear-gradient(to right, #00ff20, #00fa42, #00f558, #00f06a, #00ea78); color: white"/>
    } else if (this.props.aqi >= 51 && this.props.aqi <= 100) {
        body = <body style="background-image: linear-gradient(to right top, #f0f816, #e5ed11, #dae20b, #d0d805, #c5cd00); color: black"/>
    } else if (this.props.aqi >= 101 && this.props.aqi <= 150) {
      body = <body style="background-image: linear-gradient(to right top, #c56600, #cf771e, #da8734, #e49848, #eea85c); color: white"/>
    } else if (this.props.aqi > 150) {
      body = <body style="background-image: linear-gradient(to right top, #c60000, #d40000, #e20000, #f00000, #ff0000); color: white"/>
  };
  
    return (
      <div>
        <Helmet>
            {body}
        </Helmet>
      </div>
    )
  }
}
