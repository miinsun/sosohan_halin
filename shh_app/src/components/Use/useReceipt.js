import * as reducer from "../../store/reducers/receipt";

import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from "./components";

const useReceipt = () => {
  const isInReceipt = useShallowEqualSelectorToJS((state) => (state.receipt.get("isInReceipt")));
 
  const actions = useActions(reducer);

  return {
    isInReceipt,
    receiptGetParam : actions.receiptGetParam,
  };
};

export default useReceipt;
