/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
// import "./LinkSuggestionInput.css";

class LinkSuggestionInput extends Component {
  render() {
    return (
      <div className="linkSuggestion">
        <div className="mx-3" id="status">
          &apos;{this.props.name}&apos;에 연계 제안을 보냅니다
        </div>
        <form id="message-form" action="#" method="post">
          <textarea id="message" placeholder="제안 내용 입력" required />
        </form>
      </div>
    );
  }
}

export default LinkSuggestionInput;
