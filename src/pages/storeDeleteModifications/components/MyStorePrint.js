import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MyStorePrint extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>번호</td>
            <td>상점명</td>
            <td>
              <Link className="btn btn-primary" to="/storeRegistration">수정</Link>
              삭제
            </td>
          </tr>
          <tr>
            <td>반복문</td>
            <td>안에서</td>
            <td>돌려야 되는데..!</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default MyStorePrint;
