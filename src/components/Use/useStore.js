import * as reducer from "../../store/reducers/store";
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from "./components";

const useStore = () => {
  const store = useShallowEqualSelectorToJS((state) => (state.store.get("store")));
  const storeName = useShallowEqualSelector((state) => (state.store.getIn(["store", "name"])));
  const myStores = useShallowEqualSelectorToJS((state) => (state.store.get("getMy")));

  const actions = useActions(reducer);

  return {
    store,
    storeName,
    myStores,

    storeGet: actions.storeGet,
    storePut: actions.storePut,
    storeGetMy: actions.storeGetMy,

    storeRemove: reducer.storeRemove,

    // userPut: reducer.userPut,
  };
};

export default useStore;
