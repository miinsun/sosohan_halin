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
import { UserApi } from "../../remote";

const USER_LIST = "user/LIST";
const USER_GET = "user/GET";
const USER_PUT = "user/PUT";
const USER_REMOVE = "user/REMOVE";
const USER_LOGIN = "user/LOGIN";
const USER_LOGOUT = "user/LOGOUT";
const USER_SIGNUP = "user/SIGNUP";
const USER_FINDINGID = "user/FINDINGID";
const USER_FINDINGPW = "user/FINDINGPW";
const USER_CHECKID = "user/CHECKID";
const USER_CHECKPW = "user/CHECKPW";

export const userList = createAction(
  USER_LIST,
  UserApi.list,
);

export const userGet = createAction(
  USER_GET,
  UserApi.get,
);

export const userPut = createAction(
  USER_PUT,
  UserApi.put,
);

// export const userPut = UserApi.put;

export const userRemove = createAction(
  USER_REMOVE,
  UserApi.remove,
);
export const userSignup = createAction(
  USER_SIGNUP,
  UserApi.signup,
);

export const userLogin = createAction(
  USER_LOGIN,
  UserApi.login,
);

export const userLogout = createAction(
  USER_LOGOUT,
  UserApi.logout,
);

export const userFindingId = createAction(
  USER_FINDINGID,
  UserApi.findingId,
);

export const userFindingPw = createAction(
  USER_FINDINGPW,
  UserApi.findingPw,
);

export const userCheckId = createAction(
  USER_CHECKID,
  UserApi.checkId,
);

export const userCheckPw = createAction(
  USER_CHECKPW,
  UserApi.checkPw,
);

const initialState = Map({

  user: Map({
    businessUserId: "",
    name: "",
    email: "",
    businessNum: 0,
    stores: List([]),
    state: 0,
  }),

  list: Map({
    total: 0,
    results: List([]),
  }),
});

export default handleActions({

  ...pender({
    type: USER_GET,
    onSuccess: (state, action) => state.set("list", fromJS(action.payload.data)),
  }),

  ...pender({
    type: USER_GET,
    onSuccess: (state, action) => state.set("user", fromJS(action.payload.data)),
  }),

  ...pender({
    type: USER_PUT,
    onSuccess: (state, action) => state.set("user", fromJS(action.payload.data)),
  }),

  ...pender({
    type: USER_SIGNUP,
    onSuccess: (state, action) => state.set("user", fromJS(action.payload.data)),
  }),

  ...pender({
    type: USER_REMOVE,
    onSuccess: (state, action) => state.set("user", fromJS(action.payload.data)),
  }),

  // ...pender({
  //   type: USER_CHECKID,
  //   onSuccess: (state, action) => state.set("isIdExisting", fromJS(action.payload.data)),
  // }),

  // ...pender({
  //   type: USER_CHECKPW,
  //   onSuccess: (state, action) => state.set("isPwMatch", fromJS(action.payload.data)),
  // }),

}, initialState);
