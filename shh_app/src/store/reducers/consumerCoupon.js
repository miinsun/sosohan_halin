import { fromJS, List, Map } from "immutable";
import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { ConsumerCouponApi } from "../../remote";

const CONSUMER_COUPON_POST = "consumerCoupon/POST";
const CONSUMER_COUPON_GETALLAVAILABLE = "consumerCoupon/GETALL";
const CONSUMER_COUPON_GETALLEXPIRED = "consumerCoupon/GETALLEXPIRED";
const CONSUMER_COUPON_GET = "consumerCoupon/GET";
const CONSUMER_COUPON_PUT = "consumerCoupon/PUT";
// const CONSUMER_COUPON_REMOVE = "consumerCoupon/REMOVE";

export const consumerCouponPost = createAction(
    CONSUMER_COUPON_POST,
    ConsumerCouponApi.post,
  );

export const consumerCouponGetAllAvailable = createAction(
    CONSUMER_COUPON_GETALLAVAILABLE,
    ConsumerCouponApi.getAllAvailable,
);

export const consumerCouponGetAllExpired = createAction(
  CONSUMER_COUPON_GETALLEXPIRED,
  ConsumerCouponApi.getAllExpired,
);

export const consumerCouponGet = createAction(
    CONSUMER_COUPON_GET,
    ConsumerCouponApi.get,
);

export const consumerCouponPut = createAction(
    CONSUMER_COUPON_PUT,
    ConsumerCouponApi.put,
);

// export const consumerCouponRemove = createAction(
//   COUPON_REMOVE,
//   ConsumerCouponApi.remove,
// );

// export const consumerCouponRemove = ConsumerCouponApi.remove;

const initialState = Map({

  consumerCoupon: Map({
    consumerCouponId: 0,
    downloadDate: new Date(),
    consumerUserId: 0,
    couponId: 0,
    state:0,
    useDate: new Date(),
  }),

  consumerCouponListAvailable: Map({
    total: 0,
    results: List([]),
  }),

  consumerCouponListExpired: Map({
    total: 0,
    results: List([]),
  }),

});

export default handleActions({
  ...pender({
    type: CONSUMER_COUPON_POST,
    onSuccess: (state, action) => state.set("consumerCoupon", fromJS(action.payload.data)),
  }),

  ...pender({
    type: CONSUMER_COUPON_GETALLAVAILABLE,
    onSuccess: (state, action) => state.set("consumerCouponListAvailable", fromJS(action.payload.data)),
  }),

  ...pender({
    type: CONSUMER_COUPON_GETALLEXPIRED,
    onSuccess: (state, action) => state.set("consumerCouponListExpired", fromJS(action.payload.data)),
  }),

  ...pender({
    type: CONSUMER_COUPON_GET,
    onSuccess: (state, action) => state.set("consumerCoupon", fromJS(action.payload.data)),
  }),

  ...pender({
    type: CONSUMER_COUPON_PUT,
    onSuccess: (state, action) => state.set("consumerCoupon", fromJS(action.payload.data)),
  }),

}, initialState);
