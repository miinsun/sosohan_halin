/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
// import Sidebar from "./components/Sidebar";
import { Button } from "react-bootstrap";
import { CTOneButton, useCoupon } from "../../components";
import CouponRegisterFormView from "./components/CouponRegisterFormView";
import MyCouponListView from "./components/MyCouponListView";
import "../../styles/base.css";

const CouponManageView = ({
  total,
  results,
  remove,
  // coupon,
  insert,
  update,
  data,
  setData,
  couponInfo,
  setCouponInfo,
}) => {
  const [show, setShow] = useState(false);
  const [confirmBtn, setConfirmBtn] = useState("등록");
  const handleInsert = () => { setShow(true); setCouponInfo(null); setConfirmBtn("등록"); };

  return (
    <div className="CouponManage">
      {/* <Sidebar /> */}
      <div className="title mb-3 text-primary"> 쿠폰 관리 </div>

      <div>
        <div style={{ textAlign: "right" }}>
          <Button variant="primary" onClick={handleInsert} className="rounded-pill">
            + 등록하기
          </Button>
        </div>

        <MyCouponListView
          total={total}
          results={results}
          remove={remove}
          setCouponInfo={setCouponInfo}
          confirmBtn={confirmBtn}
          setConfirmBtn={setConfirmBtn}
          setShow={setShow}
        />
      </div>

      <CouponRegisterFormView
        confirmBtn={confirmBtn}
        coupon={couponInfo}
        insert={insert}
        update={update}
        data={data}
        setData={setData}
        show={show}
        setShow={setShow}
      />
    </div>
  );
};
export default CouponManageView;
