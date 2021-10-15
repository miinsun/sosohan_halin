/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
// import Sidebar from "./components/Sidebar";
import { Button } from "react-bootstrap";
import CouponSidebar from "../../CouponSidebar";
import { CTOneButton, useCoupon } from "../../components";
import CouponRegisterFormView from "./components/CouponRegisterFormView";
import MyCouponListView from "./components/MyCouponListView";

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
      <CouponSidebar />
      <div className="mx-auto col-6">
        <h4 className="mb-3">쿠폰 등록</h4>

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
    </div>
  );
};
export default CouponManageView;
