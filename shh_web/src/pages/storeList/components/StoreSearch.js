import React, { Component } from "react";
// eslint-disable-next-line import/no-unresolved
// import "bootstrap/dist/css/bootstrap.min.css";

export class StoreSearch extends Component {
  render() {
    return (
      <div>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
          <select className="form-select" id="country" required>
            <option value="">검색옵션...</option>
            <option>상점명</option>
            <option>카테고리</option>
            <option>위치</option>
          </select>
        </form>
      </div>
    );
  }
}

export default StoreSearch;
