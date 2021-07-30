import Banner from "./Banner";
import EditAccount from "./pages/EditAccount";
import LinkSuggest from "./pages/LinkSuggestion";
import Withdrawal from "./pages/Withdrawal";
import StoreList from "./pages/storeList";

const routes = [
  {
    path: "/banner",
    exact: true,
    component: Banner,
  },
  {
    path: "/storelist",
    exact: true,
    component: StoreList,
  },
  {
    path: "/linksuggest",
    exact: true,
    component: LinkSuggest,
  },
  {
    path: "/editaccount",
    exact: true,
    component: EditAccount,
  },
  {
    path: "/withdrawal",
    exact: true,
    component: Withdrawal,
  },
];

export default routes;

const defaultRedirect = "/banner";
export { defaultRedirect };
