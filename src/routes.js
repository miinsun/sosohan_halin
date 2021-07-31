import Banner from "./Banner";
import LinkSuggest from "./pages/LinkSuggestion";
import StoreDeleteModifications from "./pages/StoreDeleteModifications";
import StoreDetail from "./pages/StoreDetail";
import StoreRegistration from "./pages/StoreRegistration";
import StoreList from "./pages/storeList";
import CouponManage from "./pages/CouponManage";
import CouponUsage from "./pages/CouponUsage";

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
    path: "/storeDeleteModifications",
    exact: true,
    component: StoreDeleteModifications,
  },
  {
    path: "/storeDetail",
    exact: true,
    component: StoreDetail,
  },
  {
    path: "/storeRegistration",
    exact: true,
    component: StoreRegistration,
  },
  {
    path: "/couponManage",
    exact: true,
    component: CouponManage,
  },
  {
    path: "/couponUsage",
    exact: true,
    component: CouponUsage,
  },

];

export default routes;

const defaultRedirect = "/banner";
export { defaultRedirect };
