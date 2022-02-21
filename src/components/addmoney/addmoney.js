import React, { Component } from "react";
import "./addmoney.css";
export class addmoney extends Component {
  render() {
    return (
      <div className="users">
        <form>
          <div class="mb-3">
            <label class="form-label">Amount</label>
            <input type="number" class="form-control" />
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
