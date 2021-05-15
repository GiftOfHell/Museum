import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class LocationTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locations: [] };

    this.handleReload = this.handleReload.bind(this);
  }

  async handleReload(location) {
    const response = await api.locations({ date: "" });
    this.setState({ locations: response });
  }

  render() {
    return (
      <div class="container">
        <div class="section-intro text-center pb-65px">
          <h2 class="section-intro__title">Locations</h2>
        </div>
        <div class="text-center">
          <div class="row">
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
              <div class="card card-team">
                <div class="place1"></div>
                <div class="card-team__body text-center">
                  {this.state.locations.map((location) => (
                    <h3>{location.country1}</h3>
                  ))}
                  {this.state.locations.map((location) => (
                    <p>{location.city1}</p>
                  ))}
                  {this.state.locations.map((location) => (
                    <p>{location.street1}</p>
                  ))}
                  {this.state.locations.map((location) => (
                    <p>{location.address1}</p>
                  ))}
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
              <div class="card card-team">
                <div class="place2"></div>
                <div class="card-team__body text-center">
                  {this.state.locations.map((location) => (
                    <h3>{location.country2}</h3>
                  ))}
                  {this.state.locations.map((location) => (
                    <p>{location.city2}</p>
                  ))}
                  {this.state.locations.map((location) => (
                    <p>{location.street2}</p>
                  ))}
                  {this.state.locations.map((location) => (
                    <p>{location.address2}</p>
                  ))}
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
              <div class="card card-team">
                <div class="place3"></div>
                <div class="card-team__body text-center">
                  {this.state.locations.map((location) => (
                    <h3>{location.country3}</h3>
                  ))}
                  {this.state.locations.map((location) => (
                    <p>{location.city3}</p>
                  ))}
                  {this.state.locations.map((location) => (
                    <p>{location.street3}</p>
                  ))}
                  {this.state.locations.map((location) => (
                    <p>{location.address3}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="button" onClick={this.handleReload}>
            Reload Locations
          </button>
        </div>
      </div>
    );
  }
}

export default LocationTable;
