import Qs from "query-string";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTLoading, useLoading, useStore } from "../../../components";
import MyStorePrintView from "./MyStorePrintView";

const MyStorePrint = () => {
  const { myStores, storeGetMy, storeRemove } = useStore();
  const { loading, setLoading } = useLoading(true);
  const location = useLocation();

  const query = Qs.parse(location.search);

  console.log(query);
  console.log(Qs.stringify(query));

  const userId = sessionStorage.getItem("sessionId");

  const fetch = async () => {
    try {
      await storeGetMy(userId);
    } catch (e) {
      console.log(e);
    } finally {
      await setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const removeMyStore = async (storeInfo) => {
    try {
      const store = storeInfo;

      await setLoading(true);
      await storeRemove(store);
      fetch();
    } catch (e) {
      console.log(e);
      await setLoading(false);
    }
  };

  return (

    loading ? (
      <CTLoading />
    ) : (
      <MyStorePrintView
        total={myStores.total}
        results={myStores.results}
        remove={removeMyStore}
      />
    )
  );
};

export default MyStorePrint;
