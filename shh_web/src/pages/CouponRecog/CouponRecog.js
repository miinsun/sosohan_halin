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

  // const query = Qs.parse(location.search);

  // console.log(query);
  // console.log(Qs.stringify(query));

  const fetch = async () => {
    try {
      await consumerCouponGet(1);
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

      console.log(`updateConsumerCoupon : ${couponInfo.state}`);
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
