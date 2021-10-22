import * as reducer from "../../store/reducers/user";
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from "./components";

const useUser = () => {
  const usersInfo = useShallowEqualSelectorToJS((state) => (state.user.get("list")));
  const user = useShallowEqualSelectorToJS((state) => (state.user.get("user")));
  const userName = useShallowEqualSelector((state) => (state.user.getIn(["user", "name"])));
  // const isIdExisting = useShallowEqualSelector((state) => (state.user.get("isIdExisting")));
  // const isPwMatch = useShallowEqualSelector((state) => (state.user.get("isPwMatch")));

  const actions = useActions(reducer);

  return {
    user,
    userName,
    usersInfo,
    // isIdExisting,
    // isPwMatch,

    userList: actions.userList,
    userGet: actions.userGet,
    userPut: actions.userPut,
    userRemove: actions.userRemove,
    userSignup: actions.userSignup,
    userLogin: actions.userLogin,
    userLogout: actions.userLogout,
    userFindingId: actions.userFindingId,
    userFindingPw: actions.userFindingPw,
    userCheckId: actions.userCheckId,
    userCheckPw: actions.userCheckPw,
    // userPut: reducer.userPut,
  };
};

export default useUser;
