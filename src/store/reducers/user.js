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

const USER_GET = "user/GET";
const USER_PUT = "user/PUT";
const USER_REMOVE = "user/REMOVER";
const USER_LOGIN = "user/LOGIN";
const USER_LOGOUT = "user/LOGOUT";
const USER_SIGNUP = "user/SIGNUP";
const USER_FINDINGID = "user/FINDINGID";
const USER_FINDINGPW = "user/FINDINGPW";

export const userGet = createAction(
  USER_GET,
  UserApi.get,
);

export const userPut = createAction(
  USER_PUT,
  UserApi.put,
);

// export const userPut = UserApi.put;

const initialState = Map({

  user: Map({
    businessUserId: "",
    name: "",
    email: "",
    businessNum: 0,
    stores: List([]),
    state: 0,
  }),

});

export default handleActions({

  ...pender({
    type: USER_GET,
    onSuccess: (state, action) => state.set("user", fromJS(action.payload.data)),
  }),

  ...pender({
    type: USER_PUT,
    onSuccess: (state, action) => state.set("user", fromJS(action.payload.data)),
  }),

}, initialState);
