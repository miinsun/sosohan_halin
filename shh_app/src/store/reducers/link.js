import { fromJS, List, Map } from "immutable";
import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { LinkApi } from "../../remote";

const LINK_POST = "link/POST";
const LINK_GET = "link/GET";
const LINK_GETIN = "link/GETIN";
const LINK_GETOUT = "link/GETOUT";
const LINK_GETALARM = "link/GETALARM";
const LINK_PUT = "link/PUT";
const LINK_PUT_ALARM = "link/PUT/ALARM";
const LINK_PUT_ALARM_RETURN = "link/PUT/ALARM/RETURN";

export const linkPost = createAction(
  LINK_POST,
  LinkApi.post,
);

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

export const linkGetAlarm = createAction(
  LINK_GETALARM,
  LinkApi.getAlarm,
);

export const linkPut = createAction(
  LINK_PUT,
  LinkApi.put,
);

export const linkPutAlarm = createAction(
  LINK_PUT_ALARM,
  LinkApi.putAlarm,
);

export const linkPutAlarmReturn = createAction(
  LINK_PUT_ALARM_RETURN,
  LinkApi.putAlarmReturn,
);

export const linkRemove = LinkApi.remove;

const initialState = Map({

  link: Map({
    link_id: "",
    receiver_id: "",
    isWatched: "",
    state: "",
    management: "",
    proposal_date: "",
    proposer_id: "",
    content: "",
    proposer: [],
    receiver: [],
  }),

  links: Map({
    total: 0,
    results: List([]),
  }),

});

export default handleActions({
  ...pender({
    type: LINK_POST,
    onSuccess: (state, action) => state.set("link", fromJS(action.payload.data)),
  }),

  ...pender({
    type: LINK_GET,
    onSuccess: (state, action) => state.set("links", fromJS(action.payload.data)),
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
    type: LINK_GETALARM,
    onSuccess: (state, action) => state.set("links", fromJS(action.payload.data)),
  }),

  ...pender({
    type: LINK_PUT,
    onSuccess: (state, action) => state.set("link", fromJS(action.payload.data)),
  }),

  ...pender({
    type: LINK_PUT_ALARM,
    onSuccess: (state, action) => state.set("links", fromJS(action.payload.data)),
  }),

  ...pender({
    type: LINK_PUT_ALARM_RETURN,
    onSuccess: (state, action) => state.set("links", fromJS(action.payload.data)),
  }),

}, initialState);
