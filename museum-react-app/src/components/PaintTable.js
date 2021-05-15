import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class PaintTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { paints: [] };

    this.handleReload = this.handleReload.bind(this);
  }

  async handleReload(paint) {
    const response = await api.paints({ date: "" });
    this.setState({ paints: response });
  }

  render() {
    return (
      <div class="container">
        <div class="section-intro text-center pb-65px">
          <h2 class="section-intro__title">Paints</h2>
        </div>
        <div class="text-center">
          <div class="row">
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
              <div class="card card-team">
                <div class="art1"></div>
                <div class="card-team__body text-center">
                  {this.state.paints.map((paint) => (
                    <h3>{paint.name1}</h3>
                  ))}
                  {this.state.paints.map((paint) => (
                    <p>{paint.year1}</p>
                  ))}
                  {this.state.paints.map((paint) => (
                    <p>{paint.art1}</p>
                  ))}
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
              <div class="card card-team">
                <div class="art2"></div>
                <div class="card-team__body text-center">
                  {this.state.paints.map((paint) => (
                    <h3>{paint.name2}</h3>
                  ))}
                  {this.state.paints.map((paint) => (
                    <p>{paint.year2}</p>
                  ))}
                  {this.state.paints.map((paint) => (
                    <p>{paint.art2}</p>
                  ))}
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
              <div class="card card-team">
                <div class="art3"></div>
                <div class="card-team__body text-center">
                  {this.state.paints.map((paint) => (
                    <h3>{paint.name3}</h3>
                  ))}
                  {this.state.paints.map((paint) => (
                    <p>{paint.year3}</p>
                  ))}
                  {this.state.paints.map((paint) => (
                    <p>{paint.art3}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="button" onClick={this.handleReload}>
            Reload Paints
          </button>
        </div>
      </div>
    );
  }
}

export default PaintTable;
