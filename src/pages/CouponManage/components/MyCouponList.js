import Qs from "query-string";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTLoading, useLoading, useCoupon } from "../../../components";
import MyCouponListView from "./MyCouponListView";

const MyCouponList = () => {
  const { couponList, couponGetAll, couponRemove } = useCoupon();
  const { loading, setLoading } = useLoading(true);
  const location = useLocation();

  // const query = Qs.parse(location.search);

  // console.log(query);
  // console.log(Qs.stringify(query));

  const fetch = async () => {
    try {
      await couponGetAll(2, "");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const removeCoupon = async (couponInfo) => {
    try {
      const coupon = couponInfo;

      await setLoading(true);
      await couponRemove(coupon);
      fetch();
    } catch (e) {
      console.log(e);
      await setLoading(false);
    }
  };

  return (

    loading ? (
      <CTLoading />
    ) : (
      <MyCouponListView
        total={couponList.total}
        results={couponList.results}
        remove={removeCoupon}
      />
    )
  );
};

export default MyCouponList;
