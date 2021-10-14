import React, { useSelector } from "react";
import * as reducer from "../../store/reducers/consumerCoupon";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useConsumerCoupon = () => {
  const consumerCoupon = useShallowEqualSelectorToJS((state) => (state.consumerCoupon.get("consumerCoupon")));

  const actions = useActions(reducer);

  return {
    consumerCoupon,

    consumerCouponGet: actions.consumerCouponGet,
    consumerCouponPut: actions.consumerCouponPut,
  };
};

export default useConsumerCoupon;
