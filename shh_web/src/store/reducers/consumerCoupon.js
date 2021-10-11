import { fromJS, Map } from "immutable";
import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { ConsumerCouponApi } from "../../remote";

const CONSUMERCOUPON_GET = "consumerCoupon/GET";
const CONSUMERCOUPON_PUT = "consumerCoupon/PUT";

export const consumerCouponGet = createAction(
  CONSUMERCOUPON_GET,
  ConsumerCouponApi.get,
);

export const consumerCouponPut = createAction(
  CONSUMERCOUPON_PUT,
  ConsumerCouponApi.put,
);

const initialState = Map({

  consumerCoupon: Map({

    consumerCouponId: 0,
    coupon: [],
    consumerUserId: "",
    downloadDate: "",
    finishDate: "",
    useDate: "",
    state: 0,

  }),

});

export default handleActions({

  ...pender({
    type: CONSUMERCOUPON_GET,
    onSuccess: (state, action) => state.set("consumerCoupon", fromJS(action.payload.data)),
  }),

  ...pender({
    type: CONSUMERCOUPON_PUT,
    onSuccess: (state, action) => state.set("consumerCoupon", fromJS(action.payload.data)),
  }),

}, initialState);
