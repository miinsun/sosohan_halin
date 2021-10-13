import * as reducer from "../../store/reducers/consumerCoupon";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useConsumerCoupon = () => {
  const consumerCoupon = useShallowEqualSelectorToJS((state) => (state.consumerCoupon.get("consumerCoupon")));
  const consumerCouponList = useShallowEqualSelectorToJS((state) => (state.consumerCoupon.get("consumerCouponList")));
  const consumerCouponListExpired = useShallowEqualSelectorToJS((state) => (state.consumerCoupon.get("consumerCouponListExpired")));

  const actions = useActions(reducer);

  return {
    consumerCoupon,
    consumerCouponList,
    consumerCouponListExpired,

    consumerCouponGet: actions.consumerCouponGet,
    consumerCouponPut: actions.consumerCouponPut,
    consumerCouponPost: actions.consumerCouponPost,
    consumerCouponGetAll: actions.consumerCouponGetAll,
    consumerCouponGetAllExpired: actions.consumerCouponGetAllExpired,
    // consumerCouponRemove: reducer.consumerCouponRemove,

    // userPut: reducer.userPut,
  };
};

export default useConsumerCoupon;
