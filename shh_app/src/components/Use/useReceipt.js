import * as reducer from "../../store/reducers/receipt";
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useReceipt = () => {
  const receipt = useShallowEqualSelectorToJS((state) => (state.receipt.get("receipt")));

  const actions = useActions(reducer);

  return {
    receipt,

    receiptGet: actions.receiptGet,
  };
};

export default useReceipt;
