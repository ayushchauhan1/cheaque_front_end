import React, { Component } from "react";
import "./users.css";
import jsPDF from "jspdf";
import { Link } from "react-router-dom";
import axios from "axios";
export class users extends Component {
  state = {
    users: [],
    cheaques: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get(`http://localhost:5000/login/users`).then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  };
  cheaquegen = (user) => {
    const username = {
      username: user,
      number: 10,
    };
    axios
      .post("http://localhost:5000/cheaque/generation", username)
      .then((res) => {
        // console.log(res.data);
      });

    axios
      .get(`http://localhost:5000/cheaque/generation/send/${user}`)
      .then((res) => {
        // console.log(res.data[0]);
        // this.setState({ cheaques: res.data });
        var doc = new jsPDF();
        doc.rect(5, 80, 200, 70);
        doc.text("PAY", 10, 100);
        doc.line(25, 100, 120, 100);
        doc.text("RUPEES", 10, 120);
        doc.line(37, 120, 120, 120);
        doc.rect(122, 110, 30, 10);

        doc.addImage(res.data[0].qrc, 160, 85, 35, 35);
        doc.rect(160, 85, 35, 35);
        doc.text("SCAN CODE", 161, 130);
        doc.text(`BY ${user}`, 50, 140);

        for (let i = 1; i < 10; i++) {
          doc.addPage("a4");

          doc.rect(5, 80, 200, 70);
          doc.text("PAY", 10, 100);
          doc.line(25, 100, 120, 100);
          doc.text("RUPEES", 10, 120);
          doc.line(37, 120, 120, 120);
          doc.rect(122, 110, 30, 10);
          doc.addImage(res.data[i].qrc, 160, 85, 35, 35);
          doc.rect(160, 85, 35, 35);
          doc.text("SCAN CODE", 161, 130);

          doc.text(`BY ${user}`, 50, 140);
        }
        window.open(doc.output("bloburl"));
      });
    // console.log(cheaques);
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
            {this.state.users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.accountNumber}</td>
                <td>{user.name}</td>
                <td>{user.amount}</td>
                <td>
                  <div className="text-center">
                    <button
                      type="button"
                      class="btn btn-light"
                      onClick={() => {
                        this.cheaquegen(user.username);
                      }}
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
            ))}

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
