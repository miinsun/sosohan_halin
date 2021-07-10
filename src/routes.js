import Banner from "./Banner";
import LinkSuggest from "./pages/LinkSuggestion";
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
];

export default routes;

const defaultRedirect = "/banner";
export { defaultRedirect };
