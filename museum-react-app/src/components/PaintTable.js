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
      <div>
        <button className="btn" onClick={this.handleReload}>
          Reload
        </button>
        <div>
          {this.state.paints.map((paint) => (
            <div>
              {paint.name1}, {paint.year1}, {paint.art1}
            </div>
          ))}
          {this.state.paints.map((paint) => (
            <div>
              {paint.name2}, {paint.year2}, {paint.art2}
            </div>
          ))}
          {this.state.paints.map((paint) => (
            <div>
              {paint.name3}, {paint.year3}, {paint.art3}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PaintTable;
