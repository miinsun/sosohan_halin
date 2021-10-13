import PropTypes from "prop-types";
import Qs from "query-string";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTLoading, useLoading, useCoupon } from "../../../components";
import CouponRegisterFormView from "./CouponRegisterFormView";

const CouponManage = ({ couponInfo }) => {
  const {
    coupon, couponPost, couponPut, couponList, couponGetAll, couponRemove,
  } = useCoupon();
  const { loading, setLoading } = useLoading(true);
  const location = useLocation();

  // const query = Qs.parse(location.search);

  // console.log(query);
  // console.log(Qs.stringify(query));

  const fetch = async () => {
    try {
      // await couponGetAll(sessionStorage.getItem("sessionId"), "");
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

  const [data, setData] = couponInfo ? useState({
    couponId: coupon.couponId,
    name: coupon.name,
    storeId: 2,
    available: coupon.available,
    description: coupon.description,
    validity: coupon.validity,
    startDate: coupon.startDate,
    finishDate: coupon.finishDate,
  }) : useState({
    couponId: null,
    name: "",
    storeId: 2,
    available: true,
    description: "",
    validity: null,
    startDate: "",
    finishDate: "",
  });

  console.log(data.name);

  const updateCoupon = async () => {
    try {
      // if (data.email.length <= 0 || data.newPassword.length <= 0) {
      //   alert("정확한 정보를 입력해 주세요.");
      //   return;
      // }

      await couponPut(data.couponId, {
        couponId: data.couponId,
        name: data.name,
        storeId: data.storeId,
        available: data.available,
        description: data.description,
        validity: data.validity,
        startDate: data.startDate,
        finishDate: data.finishDate,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const insertCoupon = async () => {
    try {
      await couponPost({
        couponId: null,
        name: data.name,
        storeId: 2,
        available: true,
        description: data.description,
        validity: data.validity,
        startDate: data.startDate,
        finishDate: data.finishDate,
      });
    } catch (e) {
      console.log(e);
      await setLoading(false);
    }
  };

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
  // couponInfo ? (
  //   <CouponRegisterFormView
  //     btnName="수정"
  //     confirmBtn="수정"
  //     coupon={couponInfo}
  //     insert={insertCoupon}
  //     update={updateCoupon}
  //     data={data}
  //     setData={setData}
  //   />
  // ) : (
  //   <CouponRegisterFormView
  //     btnName="+ 등록하기"
  //     confirmBtn="등록"
  //     coupon={null}
  //     insert={insertCoupon}
  //     update={updateCoupon}
  //     data={data}
  //     setData={setData}
  //   />
  // )

    loading ? (
      <CTLoading />
    ) : (
      <CouponManageView
        total={couponList.total}
        results={couponList.results}
        remove={removeCoupon}
        insert={insertCoupon}
        update={updateCoupon}
      />
    )

  );
};

export default CouponManage;
