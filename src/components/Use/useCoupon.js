import * as reducer from "../../store/reducers/coupon";
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from "./components";

const useCoupon = () => {
  const coupon = useShallowEqualSelectorToJS((state) => (state.coupon.get("coupon")));
  const couponList = useShallowEqualSelectorToJS((state) => (state.couponList.get("couponList")));

  const actions = useActions(reducer);

  return {
    coupon,
    couponList,

    couponGet: actions.couponGet,
    couponPut: actions.couponPut,
    couponPost: actions.couponPost,
    couponGetAll: actions.couponGetAll,
    couponDelete: actions.couponDelete,

    // userPut: reducer.userPut,
  };
};

export default useCoupon;
