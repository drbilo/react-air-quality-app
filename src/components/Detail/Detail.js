import React, { Component } from 'react'

export default class Details extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
        <h3>{this.props.type}</h3>
      </div>
    )
  }
}
