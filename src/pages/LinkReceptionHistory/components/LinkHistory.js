/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import "./LinkHistory.css";

class LinkHistory extends Component {
  render() {
    return (
      <div className="LinkHistory">
        <div className="container">
          <div className="tabular-data module">
            <div className="data-group">
              <div className="row">
                <div className="data-expands">
                  <div className="col-lg-1 col-md-1">{this.props.date}</div>
                  <div className="col-lg-8 col-md-7">
                    <span className="title">&apos;{this.props.suggester}&apos;</span>&nbsp;
                    <span className="title"> {this.props.sugContent}</span>
                  </div>
                  <div className="col-lg-7 col-md-7">
                    <div className="red uppercase">
                      <strong>
                        <i className="fa fa-exclamation-circle" /> denial
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-sm btn-primary me-md-2" type="button">
                  승인
                </button>
                <button className="btn btn-sm btn-secondary " type="button">
                  거부
                </button>
              </div>
            </div>

            <div className="data-group">
              <div className="row">
                <div className="data-expands">
                  <div className="col-lg-1 col-md-1">{this.props.date}</div>
                  <div className="col-lg-8 col-md-7">
                    <span className="title">&apos;{this.props.suggester}&apos;</span>&nbsp;
                    <span className="title"> {this.props.sugContent}</span>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="green uppercase">
                      <strong>
                        <i className="fa fa-check-circle" /> Approved
                      </strong>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      className="btn btn-sm btn-primary me-md-2"
                      type="button"
                    >
                      승인
                    </button>
                    <button className="btn btn-sm btn-secondary " type="button">
                      거부
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="data-group">
              <div className="row">
                <div className="data-expands">
                  <div className="col-lg-1 col-md-1">{this.props.date}</div>
                  <div className="col-lg-8 col-md-7">
                    <span className="title">&apos;{this.props.suggester}&apos;</span>&nbsp;
                    <span className="title"> {this.props.sugContent}</span>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="uppercase">
                      <strong>
                        <i className="fa fa-wrench" /> In Progress
                      </strong>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      className="btn btn-sm btn-primary me-md-2"
                      type="button"
                    >
                      승인
                    </button>
                    <button className="btn btn-sm btn-secondary " type="button">
                      거부
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkHistory;
