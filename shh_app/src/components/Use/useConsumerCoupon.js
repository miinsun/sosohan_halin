import * as reducer from "../../store/reducers/consumerCoupon";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useConsumerCoupon = () => {
  const consumerCoupon = useShallowEqualSelectorToJS((state) => (state.consumerCoupon.get("consumerCoupon")));
  const consumerCouponListAvailable = useShallowEqualSelectorToJS((state) => (state.consumerCoupon.get("consumerCouponListAvailable")));
  const consumerCouponListExpired = useShallowEqualSelectorToJS((state) => (state.consumerCoupon.get("consumerCouponListExpired")));

  const actions = useActions(reducer);

  return {
    consumerCoupon,
    consumerCouponListAvailable,
    consumerCouponListExpired,

    consumerCouponGet: actions.consumerCouponGet,
    consumerCouponPut: actions.consumerCouponPut,
    consumerCouponPost: actions.consumerCouponPost,
    consumerCouponGetAllAvailable: actions.consumerCouponGetAllAvailable,
    consumerCouponGetAllExpired: actions.consumerCouponGetAllExpired,
    // consumerCouponRemove: reducer.consumerCouponRemove,

    // userPut: reducer.userPut,
  };
};

export default useConsumerCoupon;
