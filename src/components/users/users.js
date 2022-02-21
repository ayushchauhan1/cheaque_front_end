import React, { Component } from "react";
import "./users.css";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";
export class users extends Component {
  cheaquegen = () => {
    var doc = new jsPDF();
    doc.rect(5, 80, 200, 70);
    doc.text("PAY", 10, 100);
    doc.line(25, 100, 120, 100);
    doc.text("RUPEES", 10, 120);
    doc.line(37, 120, 120, 120);
    doc.rect(122, 110, 30, 10);
    doc.rect(160, 85, 35, 35);
    doc.text("SCAN CODE", 161, 130);
    doc.text("BY AYUSH CHAUHAN", 50, 140);

    window.open(doc.output("bloburl"));
  };
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
                  <button
                    type="button"
                    class="btn btn-light"
                    onClick={this.cheaquegen}
                  >
                    Issue
                  </button>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <Link to="/user_active">
                    <button type="button" class="btn btn-light">
                      Open
                    </button>
                  </Link>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <Link to="/user_transactions">
                    <button type="button" class="btn btn-light">
                      Open
                    </button>
                  </Link>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <Link to="/addmoney">
                    <button type="button" class="btn btn-light">
                      Add
                    </button>
                  </Link>
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
