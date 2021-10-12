import * as reducer from "../../store/reducers/user";
import { useActions, useShallowEqualSelector, useShallowEqualSelectorToJS } from "./components";

const useUser = () => {
  const usersInfo = useShallowEqualSelectorToJS((state) => (state.user.get("list")));
  const user = useShallowEqualSelectorToJS((state) => (state.user.get("user")));
  const userName = useShallowEqualSelector((state) => (state.user.getIn(["user", "name"])));

  const actions = useActions(reducer);

  return {
    user,
    userName,
    usersInfo,

    userList: actions.userList,
    userGet: actions.userGet,
    userPut: actions.userPut,
    userRemove: actions.userRemove,
    userSignup: actions.userSignup,
    userLogin: actions.userLogin,
    userLogout: actions.userLogout,
    userFindingId: actions.userFindingId,
    userFindingPw: actions.userFindingPw,
    // userPut: reducer.userPut,
  };
};

export default useUser;
