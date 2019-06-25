/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import getAddressFromCoords from './utils/getAddressFromCoords';

class GeoPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        latitude: null,
        longitude: null,
      },
      error: null,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    this.geoId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      (error) => {
        this.setState({ error });
      },
    );
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    navigator.geolocation.clearWatch(this.geoId);
  }

  render() {
    const { children } = this.props;
    const { coords: { latitude, longitude }, error } = this.state;

    if (error) {
      return (
        <p>
          Error:
          {` ${error.message}`}
        </p>
      );
    }

    if (latitude === null || longitude === null) {
      return (
        <p>
          Loading Geo Positions...
        </p>
      );
    }
    return children(latitude, longitude);
  }
}

GeoPosition.propTypes = {
  children: PropTypes.func.isRequired,
};

class GeoAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      lat: null,
      lng: null,
      error: '',
    };
  }

  componentDidUpdate() {
    const { latitude, longitude } = this.props;
    const { lat, lng } = this.state;
    if (latitude !== lat || longitude !== lng) {
      getAddressFromCoords(latitude, longitude)
        .then((address) => {
          this.setState({
            address,
            lat: latitude,
            lng: longitude,
          });
        })
        .catch((error) => {
          this.setState({
            error: error.message,
            lat: latitude,
            lng: longitude,
          });
        });
    }
  }

  render() {
    const { address, error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <p>
          Error:
          {` ${error.message}`}
        </p>
      );
    }

    if (address === '') {
      return (
        <p>
          Loading Geo Address...
        </p>
      );
    }
    return children(address);
  }
}

GeoAddress.propTypes = {
  children: PropTypes.func.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      <h1>Geolocation</h1>
      <h3>Geo Position</h3>
      <GeoPosition>
        {(latitude, longitude) => (
          <React.Fragment>
            <p>Latitude</p>
            <p>{latitude}</p>
            <p>Longitude</p>
            <p>{longitude}</p>
            <h3>GeoAddress Composition</h3>
            <GeoAddress latitude={latitude} longitude={longitude}>
              {address => (
                <p>
                  {address}
                </p>
              )}
            </GeoAddress>
          </React.Fragment>
        )}
      </GeoPosition>
    </div>
  );
}

export default App;
