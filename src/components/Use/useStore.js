import * as reducer from "../../store/reducers/store";
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from "./components";

const useUser = () => {
  const store = useShallowEqualSelectorToJS((state) => (state.user.get("store")));
  const storeName = useShallowEqualSelector((state) => (state.user.getIn(["store", "name"])));

  const actions = useActions(reducer);

  return {
    store,
    storeName,

    storeGet: actions.storeGet,
    storePut: actions.storePut,

    // userPut: reducer.userPut,
  };
};

export default useUser;
