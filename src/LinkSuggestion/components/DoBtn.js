/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

class DoBtn extends Component {
  render() {
    return (
      <div className="DoBtn">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2 mx-3" type="button">
            취소
          </button>
          <button className="btn btn-secondary" type="button">
            {this.props.do}
          </button>
        </div>
      </div>
    );
  }
}

export default DoBtn;
