import React from "react";
import { Link } from "react-router-dom";

const FindingIdForm = () => (
  <form className="FindingIdForm">
    ID <input type="text" /><br />
    등록된 이메일 <input type="text" />@<input type="text" />
    <select>
      <option>직접 입력</option>
      <option>naver.com</option>
      <option>gmail.com</option>
      <option>daum.net</option>
      <option>hanmail.net</option>
      <option>nate.com</option>
    </select><br />
    <Link to="/login" className="btn btn-secondary">취소</Link>
    <Link to="/findingpw/result" className="btn btn-secondary">임시 비밀번호 발급</Link>
  </form>
);

export default FindingIdForm;
