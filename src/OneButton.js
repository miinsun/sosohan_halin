/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

export class OneButton extends Component {
  render() {
    return (
      // <div>
      <button className="w-30 btn btn-sm btn-primary" type="button">{this.props.title}</button>
      // <div>
    );
  }
}

export default OneButton;
