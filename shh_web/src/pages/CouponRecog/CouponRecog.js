/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import Qs from "query-string";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTLoading, useLoading, useConsumerCoupon } from "../../components";
import CouponRecogView from "./CouponRecogView";

const CouponRecog = () => {
  const { consumerCoupon, consumerCouponGet, consumerCouponPut } = useConsumerCoupon();
  const { loading, setLoading } = useLoading(true);
  const location = useLocation();

  const query = Qs.parse(location.search);
  if (Qs.stringify(query) === "") {
    return (
      <div>{alert("잘못된 접근입니다.")} </div>
    );
  }

  const queryObject = { cCouponId: Qs.stringify(query).split("=")[1] };

  const fetch = async () => {
    try {
      await consumerCouponGet(queryObject.cCouponId * 1);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const updateConsumerCoupon = async (couponInfo) => {
    try {
      const coupon = couponInfo;
      await setLoading(true);
      await consumerCouponPut(coupon);
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
      <CouponRecogView
        consumerCoupon={consumerCoupon}
        update={updateConsumerCoupon}
      />
    )
  );
};

export default CouponRecog;
