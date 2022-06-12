import React, { Component } from "react";
import "./addmoney.css";
import axios from "axios";
export class addmoney extends Component {
  state = {
    cheaques: "",
  };
  onSubmit(e) {
    e.preventDefault();
    var obj = {
      amount: this.state.amount,
    };
    axios
      .put("", obj)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.status === "Not Verified") {
            this.setState({ verifiederror: true, loading: false });
          } else {
            this.props.fetchUser(res.data);
            this.props.fetchEvent();
            // this.props.history.push(`/`);
            window.location.pathname = "/";
            console.log(res);
          }
          this.setState({ loading: false });
          // if (res.data?.user?.verifies == false) {
          //   this.setState({ verifiederror: true });
          // } else {
          //   this.props.fetchUser(res.data);
          //   // this.props.history.push(`/`);
          //   window.location.pathname = "/";
          //   console.log(res);
          // }
        } else if (res.status === 400) {
          console.log(res);
          this.setState({ loading: false });
        }
      })
      .catch((err) => {
        this.setState({ error: true, loading: false });
      });
  }
  render() {
    return (
      <div className="users">
        <form onSubmit={this.onSubmit}>
          <div class="mb-3">
            <label class="form-label">Amount</label>
            <input
              type="number"
              class="form-control"
              required
              value={this.state.amount}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default addmoney;
