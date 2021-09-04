/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
// import Sidebar from "./components/Sidebar";
import { CTOneButton, useCoupon } from "../../components";
import MyCouponList from "./components/MyCouponList";

// class CouponManage extends Component {
//   render() {
//     return (
//       <div className="CouponManage">
//         {/* <Sidebar /> */}
//         <h1>쿠폰 관리</h1>
//         <CTOneButton title="+ 등록하기" />
//         <MyCouponList />
//       </div>
//     );
//   }
// }

const CouponManage = () => {
  const { couponGetAll } = useCoupon();

  useEffect(() => {
    const fetch = async () => {
      try {
        await couponGetAll("test");
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <div className="CouponManage">
      {/* <Sidebar /> */}
      <h1>쿠폰 관리</h1>
      <CTOneButton title="+ 등록하기" />
      <MyCouponList />
    </div>
  );
};

export default CouponManage;
