import * as reducer from "../../store/reducers/consumerCoupon";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useConsumerCoupon = () => {
  const consumerCoupon = useShallowEqualSelectorToJS((state) => (state.consumerCoupon.get("consumerCoupon")));
  const consumerCouponList = useShallowEqualSelectorToJS((state) => (state.consumerCoupon.get("consumerCouponList")));

  const actions = useActions(reducer);

  return {
    consumerCoupon,
    consumerCouponList,

    consumerCouponGet: actions.consumerCouponGet,
    consumerCouponPut: actions.consumerCouponPut,
    consumerCouponPost: actions.consumerCouponPost,
    consumerCouponGetAll: actions.consumerCouponGetAll,
    // consumerCouponRemove: reducer.consumerCouponRemove,

    // userPut: reducer.userPut,
  };
};

export default useConsumerCoupon;
