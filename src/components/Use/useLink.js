import * as reducer from "../../store/reducers/link";
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from "./components";

const useLink = () => {
  const link = useShallowEqualSelectorToJS((state) => (state.link.get("link")));
  const links = useShallowEqualSelectorToJS((state) => (state.link.get("links")));
  // const storeName = useShallowEqualSelector((state) => (state.store.getIn(["store", "name"])));

  const actions = useActions(reducer);

  return {
    link,
    links,

    linkGet: actions.linkGet,
    linkGetIn: actions.linkGetIn,
    linkGetOut: actions.linkGetOut,
    linkPut: actions.linkPut,

    linkRemove: reducer.linkRemove,

  };
};

export default useLink;
