/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
// import Sidebar from "./components/Sidebar";
import { CTOneButton, useCoupon } from "../../components";
import CouponRegisterForm from "./components/CouponRegisterForm";
import MyCouponList from "./components/MyCouponList";

// class CouponManage extends Component {
//   render() {
//     return (
//       <div className="CouponManage">
//         {/* <Sidebar /> */}
//         <h1>쿠폰 관리</h1>
//         <CTOneButton title="+ 등록하기" />
//         <MyCouponList />y
//       </div>
//     );
//   }
// }

const CouponManage = () => (
  <div className="CouponManage">
    {/* <Sidebar /> */}
    <h1>쿠폰 관리</h1>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      + 등록하기
    </button>
    {/* <CouponRegisterForm /> */}
    <MyCouponList />
  </div>
);
export default CouponManage;

// const { couponGetAll } = useCoupon();

// useEffect(() => {
//   const fetch = async () => {
//     try {
//       await couponGetAll(0);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   fetch();
// }, []);
