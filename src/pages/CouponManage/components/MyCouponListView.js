/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
// import "../../LinkReceptionHistory/components/LinkHistory.css";
import { CTTable, CTOneButton, useCoupon } from "../../../components";

const MyCouponListView = ({ total, results, remove }) => (
  <div>
    <CTTable
      columns={[
        "No",
        "상점명",
        "쿠폰 설명",
        "유효기한",
        "수정/삭제",
      ]}
      total={total}
      emptyDataMessage="등록된 쿠폰이 없습니다."
    >
      {total > 0 && results.map((data, index) => (
        <tr key={data.couponId}>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>{data.descripttion}</td>
          <td>{data.startDate} - {data.finishDate}</td>
          <td>
            <Link className="btn btn-primary" to="/storeRegistration">수정</Link>

            {/* eslint-disable-next-line  */}
            <a className="btn btn-primary" onClick={() => remove(data)}>삭제
            </a>
          </td>
        </tr>
      ))}
    </CTTable>
  </div>
);

MyCouponListView.propTypes = {
  total: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array,
  remove: PropTypes.func,
};

MyCouponListView.defaultProps = {
  total: 0,
  results: [],
  remove: () => { },
};

export default MyCouponListView;
