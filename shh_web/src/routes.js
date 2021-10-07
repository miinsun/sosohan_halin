import Banner from "./Banner";
import CouponManage from "./pages/CouponManage";
import CouponUsage from "./pages/CouponUsage";
import EditAccount from "./pages/EditAccount";
import LinkAlarm from "./pages/LinkAlarm";
import LinkInProgress from "./pages/LinkInProgress";
import LinkReceptionHistory from "./pages/LinkReceptionHistory";
import LinkSentHistory from "./pages/LinkSentHistory";
import LinkSuggest from "./pages/LinkSuggestion";
import Withdrawal from "./pages/Withdrawal";
import StoreDeleteModifications from "./pages/storeDeleteModifications";
import StoreDetail from "./pages/storeDetail";
import StoreList from "./pages/storeList";
import StoreRegistration from "./pages/storeRegistration";

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
    path: "/link/in",
    exact: true,
    component: LinkReceptionHistory,
  },
  {
    path: "/link/out",
    exact: true,
    component: LinkSentHistory,
  },
  {
    path: "/link",
    exact: true,
    component: LinkInProgress,
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
