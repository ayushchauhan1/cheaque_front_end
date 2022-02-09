import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Left from "./components/left/left";
import Navbar from "./components/navbar/navbar";
import Transactions from "./components/transactions/transactions";
import Users from "./components/users/users";

function App() {
  return (
    <div className="app">
      <Left />
      <Navbar />
      {/* <Users /> */}
      <Transactions />
    </div>
  );
}

export default App;
