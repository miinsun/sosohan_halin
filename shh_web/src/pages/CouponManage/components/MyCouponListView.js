/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CTTable, CTOneButton, useCoupon } from "../../../components";
import CouponRegisterFormView from "./CouponRegisterFormView";

const MyCouponListView = ({
  total, results, remove, setCouponInfo, confirmBtn, setConfirmBtn, setShow,
}) => (
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
          <td>{data.description}</td>
          <td>{data.startDate} ~ {data.finishDate}</td>
          <td>

            {/* eslint-disable */}
            {/* <CouponRegisterFormView couponInfo={data} /> */}
            
            <Button variant="primary" onClick={() => { setShow(true); setCouponInfo(data); setConfirmBtn("수정"); }}>
              수정
            </Button>

            {/* eslint-disable */}
            <a
              className="btn btn-primary"
              onClick={() => { if (confirm("쿠폰을 삭제하시겠습니까?")) remove(data); }}
            >삭제
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
