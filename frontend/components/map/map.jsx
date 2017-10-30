import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7831, lng: -73.9712 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }
  render() {
    return (
      <div id='map' ref={ map => this.mapNode = map }>

      </div>
    );
  }
}

export default Map;