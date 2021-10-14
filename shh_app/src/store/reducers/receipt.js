
import { fromJS, List, Map } from "immutable";
import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import { ReceiptApi } from "../../remote";

const RECEIPT_GETRECEIPTBYPARAMS = "receipt/GETRECEIPTBYPARAMS";


export const receiptGetParam = createAction(
  RECEIPT_GETRECEIPTBYPARAMS,
  ReceiptApi.getReceiptByParams,
);

const initialState = Map({
  isInReceipt: Map({
    isIn: false,
    store: [],
  }),

});

export default handleActions({
  ...pender({
    type: RECEIPT_GETRECEIPTBYPARAMS,
    onSuccess: (state, action) => state.set("isInReceipt", fromJS(action.payload.data)),
  }),
}, initialState);
