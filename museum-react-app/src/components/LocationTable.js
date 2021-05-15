import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class LocationTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { locations: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(location) {
    const response = await api.locations({ date: '' });
    this.setState({ locations: response });
  }


  render() {
    return <div>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      <div>
        {this.state.locations.map((location) => <div>{location.country1}, {location.city1}, {location.street1}, {location.address1}</div>)}
        {this.state.locations.map((location) => <img src={location.image1}/>)}
        {this.state.locations.map((location) => <div>{location.country2}, {location.city2}, {location.street2}, {location.address2}</div>)}
        {this.state.locations.map((location) => <img src={location.image2}/>)}
        {this.state.locations.map((location) => <div>{location.country3}, {location.city3}, {location.street3}, {location.address3}</div>)}
        {this.state.locations.map((location) => <img src={location.image3}/>)}
      </div>
    </div>
  }
}

export default LocationTable;