import React, { Component } from "react";
import "./active_cheaques.css";
import axios from "axios";
export class active_cheaques extends Component {
  state = {
    cheaques: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get(`http://localhost:5000/cheaque/activecheaques`).then((res) => {
      console.log(res.data);
      this.setState({ cheaques: res.data });
    });
  };
  render() {
    return (
      <div>
        <div className="users">
          <table class="table table-bordered table-hover table-responsive-lg">
            <thead>
              <tr>
                <th scope="col" className="column">
                  S.no
                </th>
                <th scope="col" className="column">
                  Sender Username
                </th>
                <th scope="col" className="column">
                  Reciever Username
                </th>
                <th scope="col" className="column">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.cheaques.map((cheaque, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{cheaque.usernameSender}</td>
                  <td>{cheaque.usernameReciever}</td>
                  <td>{cheaque.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default active_cheaques;
