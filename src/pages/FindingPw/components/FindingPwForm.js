import React from "react";

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
    <button type="button">취소</button><button type="submit">임시 비밀번호 발급</button>
  </form>
);

export default FindingIdForm;
