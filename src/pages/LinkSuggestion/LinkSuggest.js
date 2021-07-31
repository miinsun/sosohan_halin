/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import DoBtn from "./components/DoBtn";
import LinkSuggestionInput from "./components/LinkSuggestionInput";

class LinkSuggest extends Component {
  render() {
    return (
      <>
        <h1>연계 제안하기</h1>
        <LinkSuggestionInput />
        <DoBtn do="제안하기" />

      </>
    );
  }
}

export default LinkSuggest;
