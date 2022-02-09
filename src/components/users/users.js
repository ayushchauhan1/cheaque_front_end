import React, { Component } from "react";
import "./users.css";
export class users extends Component {
  render() {
    return (
      <div className="users">
        <table class="table table-bordered table-hover table-responsive-lg">
          <thead>
            <tr>
              <th scope="col" className="column">
                S.no
              </th>
              <th scope="col" className="column">
                Username
              </th>
              <th scope="col" className="column">
                Account Number
              </th>
              <th scope="col" className="column">
                Name
              </th>
              <th scope="col" className="column">
                Current Amount
              </th>
              <th scope="col" className="column">
                Issue Cheaque
              </th>
              <th scope="col" className="column">
                Active Cheaque
              </th>
              <th scope="col" className="column">
                Transactions
              </th>
              <th scope="col" className="column">
                Add Money
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ayush1</td>
              <td>3456 785 2445</td>
              <td>Ayush Chauhan</td>
              <td>10,000</td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Issue
                  </button>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Open
                  </button>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Open
                  </button>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Add
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Ayush1</td>
              <td>3456 785 2445</td>
              <td>Ayush Chauhan</td>
              <td>10,000</td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Issue
                  </button>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Open
                  </button>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Open
                  </button>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Add
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Ayush1</td>
              <td>3456 785 2445</td>
              <td>Ayush Chauhan</td>
              <td>10,000</td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Issue
                  </button>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Open
                  </button>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Open
                  </button>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <button type="button" class="btn btn-light">
                    Add
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default users;
