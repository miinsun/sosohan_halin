import { fromJS, Map } from "immutable";
import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { ReceiptApi } from "../../remote";

const RECEIPT_GET = "receipt/GET";


export const receiptGet = createAction(
    RECEIPT_GET,
    ReceiptApi.get,
);

const initialState = Map({

  receipt: Map({
    storeName: "",
    businessNum: 0,
    date: "",
    consumeruserId: "",
  }),

});

export default handleActions({

  ...pender({
    type: RECEIPT_GET,
    onSuccess: (state, action) => state.set("receipt", fromJS(action.payload.data)),
  }),


}, initialState);
