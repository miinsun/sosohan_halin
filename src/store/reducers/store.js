// import client from "../../remote/client";
// import urls from "../../remote/urls";

// export const get = (businessUserId) => client.get(`${urls.user}/${businessUserId}`);
// export const put = (businessUserId, form) => client.put(`${urls.user}/${businessUserId}`, form);
// export const remove = (businessUserId) => client.delete(`${urls.user}/${businessUserId}`);
// export const login = (form) => client.post("/api/v1/login", form);
// export const logout = () => client.get("/api/v1/logout");
// export const signup = (form) => client.post("/api/v1/signup", form);
// export const findingId = (form) => client.post("/api/v1/findingId", form);
// export const findingPw = (form) => client.post("/api/v1/findingPw", form);

import { fromJS, List, Map } from "immutable";
import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { StoreApi } from "../../remote";

const STORE_GETMY = "store/GETMY";
const STORE_GET = "store/GET";
const STORE_PUT = "store/PUT";
const STORE_REMOVE = "store/REMOVER";

export const storeGet = createAction(
  STORE_GET,
  StoreApi.get,
);

export const storeGetMy = createAction(
  STORE_GETMY,
  StoreApi.getMy,
);

export const storePut = createAction(
  STORE_PUT,
  StoreApi.put,
);

// export const storeRemove = createAction(
//   STORE_REMOVE,
//   StoreApi.remove,
// );

// export const userPut = UserApi.put;
export const storeRemove = StoreApi.remove;

const initialState = Map({

  store: Map({
    businessUserId: "",
    name: "",
    address1: "",
    address2: "",
    telephone: "",
    store_image1: "",
    store_image2: "",
    store_image3: "",
    logoe_image: "",
    introduce: "",
    short_introduce: "",
  }),

  getMy: Map({
    total: 0,
    results: List([]),
  }),

});

export default handleActions({

  ...pender({
    type: STORE_GET,
    onSuccess: (state, action) => state.set("store", fromJS(action.payload.data)),
  }),

  ...pender({
    type: STORE_GETMY,
    onSuccess: (state, action) => state.set("getMy", fromJS(action.payload.data)),
  }),

  ...pender({
    type: STORE_PUT,
    onSuccess: (state, action) => state.set("store", fromJS(action.payload.data)),
  }),

}, initialState);
