import { fromJS, List, Map } from "immutable";
import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { CouponApi } from "../../remote";

const COUPON_POST = "coupon/POST";
const COUPON_GETALL = "coupon/GETALL";
const COUPON_GET = "coupon/GET";
const COUPON_PUT = "coupon/PUT";
// const COUPON_REMOVE = "coupon/REMOVE";

export const couponPost = createAction(
  COUPON_POST,
  CouponApi.post,
);

export const couponGetAll = createAction(
  COUPON_GETALL,
  CouponApi.getAll,
);

export const couponGet = createAction(
  COUPON_GET,
  CouponApi.get,
);

export const couponPut = createAction(
  COUPON_PUT,
  CouponApi.put,
);

// export const couponRemove = createAction(
//   COUPON_REMOVE,
//   CouponApi.remove,
// );

export const couponRemove = CouponApi.remove;

const initialState = Map({

  coupon: Map({

    couponId: 0,
    storeId: 0,
    name: "",
    description: "",
    validity: 0,
    available: true,
    startDate: new Date(),
    finishDate: new Date(),

  }),

  couponList: Map({

    total: 0,
    results: List([]),

  }),

});

export default handleActions({

  ...pender({
    type: COUPON_POST,
    onSuccess: (state, action) => state.set("coupon", fromJS(action.payload.data)),
  }),

  ...pender({
    type: COUPON_GETALL,
    onSuccess: (state, action) => state.set("couponList", fromJS(action.payload.data)),
  }),

  ...pender({
    type: COUPON_GET,
    onSuccess: (state, action) => state.set("coupon", fromJS(action.payload.data)),
  }),

  ...pender({
    type: COUPON_PUT,
    onSuccess: (state, action) => state.set("coupon", fromJS(action.payload.data)),
  }),

}, initialState);
