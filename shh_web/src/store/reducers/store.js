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
const STORE_GETALL = "store/GETALL";
const STORE_GET = "store/GET";
const STORE_PUT = "store/PUT";
const STORE_REMOVE = "store/REMOVER";
const STORE_POST = "store/POST";
const STORE_GETSTORESBYPARAMS = "store/GETSTORESBYPARAMS";

export const storeGet = createAction(
  STORE_GET,
  StoreApi.get,
);

export const storeGetMy = createAction(
  STORE_GETMY,
  StoreApi.getMy,
);

export const storeGetAll = createAction(
  STORE_GETALL,
  StoreApi.getAll,
);

export const storePut = createAction(
  STORE_PUT,
  StoreApi.put,
);

export const storeGetStoresByParams = createAction(
  STORE_GETSTORESBYPARAMS,
  StoreApi.getStoresByParams,
);

export const storePost = createAction(
  STORE_POST,
  StoreApi.post,
);

export const storeRemove = StoreApi.remove;

const initialState = Map({

  store: Map({
    businessUserId: "",
    name: "",
    address1: "",
    address2: "",
    telephone: "",
    storeImage1: "",
    storeImage2: "",
    storeImage3: "",
    logoImage: "",
    introduce: "",
    shortIntroduce: "",
    mainCategoryId: "",
    subCategoryId: "",
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
    type: STORE_GETALL,
    onSuccess: (state, action) => state.set("getAll", fromJS(action.payload.data)),
  }),

  ...pender({
    type: STORE_PUT,
    onSuccess: (state, action) => state.set("store", fromJS(action.payload.data)),
  }),

  ...pender({
    type: STORE_POST,
    onSuccess: (state, action) => state.set("store", fromJS(action.payload.data)),
  }),

  ...pender({
    type: STORE_GETSTORESBYPARAMS,
    onSuccess: (state, action) => state.set("store", fromJS(action.payload.data)),
  }),

}, initialState);
