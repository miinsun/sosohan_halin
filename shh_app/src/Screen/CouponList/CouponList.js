// import Qs from "query-string";
// import React, { useEffect } from "react";
// import { useLoading, useCoupon } from "../../../components";
// import CouponListView from "./CouponListView";

// const CouponList = () => {
//   const { couponList, couponGetLinked } = useCoupon();
//   const { loading, setLoading } = useLoading(true);
//   const location = useLocation();

//   const query = Qs.parse(location.search);
//   console.log(query);
//   console.log(Qs.stringify(query));

//   const fetch = async () => {
//     try {
//       await couponGetLinked();
//     } catch (e) {
//       console.log(e);
//     } finally {
//       await setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetch();
//   }, []);

//   return (

//     loading ? (
//       <CTLoading />
//     ) : (
//       <CouponListView
//         total={coupon.total}
//         results={coupon.results}
//       />
//     )
//   );
// };

// export default CouponList;
