// import Qs from "query-string";
// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { CTLoading, useLoading, useCoupon } from "../../../components";
// import CouponRegisterFormView from "./CouponRegisterFormView";

// const CouponRegisterForm = () => {
//   const {
//     coupon, couponPost, couponPut,
//   } = useCoupon();
//   const { loading, setLoading } = useLoading(true);

//   const [data, setData] = useState({
//     email: user.email,
//     newPassword: "",
//     newPasswordConfirm: "",
//   });

//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const updateCoupon = async () => {
//     try {
//       console.log(data);

//       // if (data.email.length <= 0 || data.newPassword.length <= 0) {
//       //   alert("정확한 정보를 입력해 주세요.");
//       //   return;
//       // }

//       await couponPut({
//         name: data.name,
//         description: data.description,
//         validity: data.validity,
//         startDate: data.startDate,
//         finishDate: data.finishDate,
//       });

//       // await userGet(user.businessUserId);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetch = async () => {
//     try {
//       await coupon();
//     } catch (e) {
//       console.log(e);
//     } finally {
//       await setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetch();
//   }, []);

//   const insertCoupon = async (form) => {
//     try {
//       const newCoupon = form;

//       await setLoading(true);
//       await couponPost(newCoupon);
//     } catch (e) {
//       console.log(e);
//       await setLoading(false);
//     }
//   };

//   return (
//     coupon ? (
//       <CouponRegisterFormView
//         coupon={coupon}
//         insert={insertCoupon}
//         update={updateCoupon}
//         btnName="수정"
//       />
//     ) : (
//       <CouponRegisterFormView
//         coupon={coupon}
//         insert={insertCoupon}
//         update={updateCoupon}
//         btnName="등록"
//       />
//     )
//   );
// };

// export default CouponRegisterForm;
