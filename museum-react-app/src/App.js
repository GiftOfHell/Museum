import "./App.css";
import React from "react";

import TicketTable from "./components/TicketTable.js";
import PaintTable from "./components/PaintTable.js";
import LocationTable from "./components/LocationTable.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import moment from "moment";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/paint">Paints</Link>
            </li>

            <li>
              <Link to="/location">Location</Link>
            </li>

            <li>
              <Link to="/ticket">Tickets</Link>
            </li>
          </ul>
        </nav>

        <div className="App">
          <section>
            <Switch>
              <Route path="/paint">
                <h1>Paints</h1>
                <PaintTable />
              </Route>

              <Route path="/location">
                <h1>Museums locations</h1>
                <LocationTable />
              </Route>

              <Route path="/ticket">
                <h1>Tickets</h1>
                <TicketTable />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
