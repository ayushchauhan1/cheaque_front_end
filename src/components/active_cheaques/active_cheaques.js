import React, { Component } from "react";
import "./active_cheaques.css";
export class active_cheaques extends Component {
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
              <tr>
                <th scope="row">1</th>
                <td>Ayush1</td>
                <td>Dhwaj23</td>
                <td>5000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default active_cheaques;