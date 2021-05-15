import React from "react";
import * as Api from "typescript-fetch-api";

const api = new Api.DefaultApi();

class TicketTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tickets: [] };

    this.handleReload = this.handleReload.bind(this);
  }

  async handleReload(ticket) {
    const response = await api.tickets({ date: "" });
    this.setState({ tickets: response });
  }

  render() {
    return (
      <div class="container">
        <div class="section-intro text-center pb-65px">
          <h2 class="section-intro__title">Tickets</h2>
        </div>
        <div class="text-center">
          <div class="row">
            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
              <div class="card card-team">
                <div class="ticket1"></div>
                <div class="card-team__body text-center">
                  {this.state.tickets.map((ticket) => (
                    <h3>{ticket.museumName1}</h3>
                  ))}
                  {this.state.tickets.map((ticket) => (
                    <p>${ticket.price1}</p>
                  ))}
                  {this.state.tickets.map((ticket) => (
                    <p>{ticket.amount1}</p>
                  ))}
                  {this.state.tickets.map((ticket) => (
                    <p>{ticket.date1}</p>
                  ))}
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
              <div class="card card-team">
                <div class="ticket2"></div>
                <div class="card-team__body text-center">
                  {this.state.tickets.map((ticket) => (
                    <h3>{ticket.museumName2}</h3>
                  ))}
                  {this.state.tickets.map((ticket) => (
                    <p>${ticket.price2}</p>
                  ))}
                  {this.state.tickets.map((ticket) => (
                    <p>{ticket.amount2}</p>
                  ))}
                  {this.state.tickets.map((ticket) => (
                    <p>{ticket.date2}</p>
                  ))}
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-xl-0">
              <div class="card card-team">
                <div class="ticket3"></div>
                <div class="card-team__body text-center">
                  {this.state.tickets.map((ticket) => (
                    <h3>{ticket.museumName3}</h3>
                  ))}
                  {this.state.tickets.map((ticket) => (
                    <p>${ticket.price3}</p>
                  ))}
                  {this.state.tickets.map((ticket) => (
                    <p>{ticket.amount3}</p>
                  ))}
                  {this.state.tickets.map((ticket) => (
                    <p>{ticket.date3}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="button" onClick={this.handleReload}>
            Reload Tickets
          </button>
        </div>
      </div>
    );
  }
}

export default TicketTable;
