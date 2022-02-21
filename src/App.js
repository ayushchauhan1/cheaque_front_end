import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Left from "./components/left/left";
import Navbar from "./components/navbar/navbar";
import Transactions from "./components/transactions/transactions";
import Users from "./components/users/users";
import Active from "./components/active_cheaques/active_cheaques";
import Addmoney from "./components/addmoney/addmoney";
import User_active from "./components/user_active_cheaques/user_active_cheaques";
function App() {
  return (
    <div className="app">
      {/* <Users /> */}
      {/* <Transactions /> */}
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={() => (
              <>
                <Left />
                <Users />
              </>
            )}
          />
          <Route
            exact={true}
            path="/active"
            render={() => (
              <>
                <Left />

                <Active />
              </>
            )}
          />
          <Route
            exact={true}
            path="/user_active"
            render={() => (
              <>
                <Left />

                <User_active />
              </>
            )}
          />
          <Route
            exact={true}
            path="/transactions"
            render={() => (
              <>
                <Left />

                <Transactions />
              </>
            )}
          />

          <Route
            exact={true}
            path="/apk"
            render={() => (
              <>
                <Left />
              </>
            )}
          />
          <Route
            exact={true}
            path="/addmoney"
            render={() => (
              <>
                <Left />
                <Addmoney />
              </>
            )}
          />
        </Switch>{" "}
      </Router>
    </div>
  );
}

export default App;
