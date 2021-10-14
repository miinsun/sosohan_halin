import * as reducer from "../../store/reducers/receipt";
<<<<<<< HEAD
import { useActions, useShallowEqualSelectorToJS } from "./components";

const useReceipt = () => {
  const receipt = useShallowEqualSelectorToJS((state) => (state.receipt.get("receipt")));

  const actions = useActions(reducer);

  return {
    receipt,

    receiptGet: actions.receiptGet,
=======
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from "./components";

const useReceipt = () => {
  const isInReceipt = useShallowEqualSelectorToJS((state) => (state.receipt.get("isInReceipt")));
 
  const actions = useActions(reducer);

  return {
    isInReceipt,
    receiptGetParam : actions.receiptGetParam,
>>>>>>> feature/22
  };
};

export default useReceipt;
