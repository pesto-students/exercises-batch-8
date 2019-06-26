/**
  Exercise:

  - Refactor App by creating a new component named `<GeoPosition>`
  - <GeoPosition> should use a child render callback that passes
    to <App> the latitude and longitude state
  - When you're done, <App> should no longer have anything but
    a render method

  Part 2:
  - Now create a <GeoAddress> component that also uses a render
    callback with the current address. You will use
    `getAddressFromCoords(latitude, longitude)` to get the
    address, it returns a promise.
  - You should be able to compose <GeoPosition> and <GeoAddress>
    beneath it to naturally compose both the UI and the state
    needed to render it
  - Make sure <GeoAddress> supports the user moving positions

  There is an image of the end result of this exercise in the root of this directory
  by the name - `render_props.png`. Good luck!

  NOTE: It is important to do this exercise using render props.
  https://reactjs.org/docs/render-props.html
 */

/* eslint-disable react/no-multi-comp */

import React from "react";
// import PropTypes from 'prop-types';

import getAddressFromCoords from "./utils/getAddressFromCoords";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: null,
        longitude: null
      },
      error: null,
      geoAddress: null
    };
    this.locationCallback = this.locationCallback.bind(this);
    this.addressCallback = this.addressCallback.bind(this);
  }

  locationCallback(latitude, longitude, error) {
    this.setState({
      coords: { latitude: latitude, longitude: longitude },
      error: error
    });
  }
  addressCallback(address) {
    this.setState({
      address: address
    });
  }

  render() {
    const { error, address, coords } = this.state;
    const { latitude, longitude } = coords;
    return (
      <div>
        <h1>Geo Location</h1>
        <GeoPosition
          latitude={latitude}
          longitude={longitude}
          error={error}
          locationCallback={this.locationCallback}
        />
        <GeoAddress
          latitude={latitude}
          longitude={longitude}
          address={address}
          addressCallback={this.addressCallback}
        />
      </div>
    );
  }
}

class GeoPosition extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.geoId = navigator.geolocation.watchPosition(
      position => {
        this.props.locationCallback(
          position.coords.latitude,
          position.coords.longitude,
          null
        );
      },
      error => {
        this.props.locationCallback(null, null, error);
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId);
  }

  render() {
    return (
      <div>
        <h3>Geoposition</h3>
        {this.props.error ? (
          <div>Error: {this.props.error.message}</div>
        ) : (
          <dl>
            <dt>Latitude</dt>
            <dd>
              {this.props.latitude || <p>create a loader and show here...</p>}
            </dd>
            <dt>Longitude</dt>
            <dd>
              {this.props.longitude || <p>create a loader and show here...</p>}
            </dd>
          </dl>
        )}
      </div>
    );
  }
}

class GeoAddress extends React.Component {
  constructor(props) {
    super(props);
  }

  updateAddress() {
    getAddressFromCoords(this.props.latitude, this.props.longitude).then(
      address => {
        this.props.addressCallback(address);
      }
    );
  }

  componentDidMount() {
    if (this.props.latitude != null && this.props.longitude != null) {
      this.updateAddress();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(this.props);

    if (
      prevProps.latitude !== this.props.latitude ||
      prevProps.longitude !== this.props.longitude
    ) {
      this.updateAddress();
    }
  }

  render() {
    return (
      <div>
        <h3>Geo Address</h3>
        {this.props.address}
      </div>
    );
  }
}

export default App;
