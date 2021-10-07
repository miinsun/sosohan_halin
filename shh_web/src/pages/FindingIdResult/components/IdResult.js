import React from "react";
import { useUser } from "../../../components";

const IdResult = (props) => (
  <div className="IdResult">
    아이디 찾기 결과입니다.<br />
    <span>{props.result}</span>
  </div>
);

export default IdResult;
