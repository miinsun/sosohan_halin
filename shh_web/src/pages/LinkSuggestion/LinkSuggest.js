/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import LinkSuggestionInput from "./components/LinkSuggestionInput";

class LinkSuggest extends Component {
  render() {
    return (
      <>
        {/* // <div className="linkSuggestion">
      //   <div id="page-wrapper"> */}
        <h1>연계 제안하기</h1>
        <LinkSuggestionInput />
        {/* //   </div>
      // </div> */}
      </>
    );
  }
}

export default LinkSuggest;