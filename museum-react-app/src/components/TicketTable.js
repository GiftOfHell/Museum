import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class TicketTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tickets: [] };

    this.handleReload = this.handleReload.bind(this);
  }


  async handleReload(ticket) {
    const response = await api.tickets({ date: '' });
    this.setState({ tickets: response });
  }


  render() {
    return <div>
      <button className="btn" onClick={this.handleReload}>Reload</button>
      <div>
        {this.state.tickets.map((ticket) => <div>{ticket.price1}, {ticket.amount1}, {ticket.date1}, {ticket.museumName1}</div>)}
        {this.state.tickets.map((ticket) => <div>{ticket.price2}, {ticket.amount2}, {ticket.date2}, {ticket.museumName2}</div>)}
        {this.state.tickets.map((ticket) => <div>{ticket.price3}, {ticket.amount3}, {ticket.date3}, {ticket.museumName3}</div>)}
      </div>
    </div>
  }
}

export default TicketTable;
