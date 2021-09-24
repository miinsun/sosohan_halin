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
import { LinkApi } from "../../remote";

const LINK_GET = "link/GET";
const LINK_GETIN = "link/GETIN";
const LINK_GETOUT = "link/GETOUT";
const LINK_PUT = "link/PUT";

export const linkGet = createAction(
  LINK_GET,
  LinkApi.get,
);

export const linkGetIn = createAction(
  LINK_GETIN,
  LinkApi.getMyIncoming,
);

export const linkGetOut = createAction(
  LINK_GETOUT,
  LinkApi.getMyOutcoming,
);

export const linkPut = createAction(
  LINK_PUT,
  LinkApi.put,
);

export const linkRemove = LinkApi.remove;

const initialState = Map({

  link: Map({
    link_id: "",
    receiver_id: "",
    state: "",
    management: "",
    proposal_date: "",
    proposer_id: "",
  }),

  links: Map({
    total: 0,
    results: List([]),
  }),

});

export default handleActions({

  ...pender({
    type: LINK_GET,
    onSuccess: (state, action) => state.set("link", fromJS(action.payload.data)),
  }),

  ...pender({
    type: LINK_GETIN,
    onSuccess: (state, action) => state.set("links", fromJS(action.payload.data)),
  }),

  ...pender({
    type: LINK_GETOUT,
    onSuccess: (state, action) => state.set("links", fromJS(action.payload.data)),
  }),

  ...pender({
    type: LINK_PUT,
    onSuccess: (state, action) => state.set("link", fromJS(action.payload.data)),
  }),

}, initialState);
