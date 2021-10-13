import * as reducer from "../../store/reducers/store";
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from "./components";

const useStore = () => {
  const store = useShallowEqualSelectorToJS((state) => (state.store.get("store")));
  const storeName = useShallowEqualSelector((state) => (state.store.getIn(["store", "name"])));
  const myStores = useShallowEqualSelectorToJS((state) => (state.store.get("getMy")));
  const allStores = useShallowEqualSelectorToJS((state) => (state.store.get("getAll")));

  const actions = useActions(reducer);

  return {
    store,
    storeName,
    myStores,
    allStores,

    storeGet: actions.storeGet,
    storePut: actions.storePut,
    storeGetMy: actions.storeGetMy,
    storeGetAll: actions.storeGetAll,
    storeGetStoresByParams: actions.storeGetStoresByParams,
    storePost: actions.storePost,

    storeRemove: reducer.storeRemove,

  };
};

export default useStore;
