import * as reducer from "../../store/reducers/link";
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from "./components";

const useLink = () => {
  const link = useShallowEqualSelectorToJS((state) => (state.link.get("link")));
  const links = useShallowEqualSelectorToJS((state) => (state.link.get("links")));

  const actions = useActions(reducer);

  return {
    link,
    links,

    linkPost: actions.linkPost,
    linkGet: actions.linkGet,
    linkGetIn: actions.linkGetIn,
    linkGetOut: actions.linkGetOut,
    linkGetAlarm: actions.linkGetAlarm,
    linkPut: actions.linkPut,
    linkPutAlarm: actions.linkPutAlarm,
    linkPutAlarmReturn: actions.linkPutAlarmReturn,

    linkRemove: reducer.linkRemove,

  };
};

export default useLink;
