import Qs from "query-string";
import React, { useEffect } from "react";
import { CTLoading, useLoading, useLink } from "../../../components";
import LinkProgressView from "./LinkInProgressView";

const storeId = sessionStorage.getItem("currentStoreId");
console.log(storeId);
const LinkProgressHistory = () => {
  const { links, linkGet, linkPut } = useLink();
  const { loading, setLoading } = useLoading(true);

  const fetch = async () => {
    try {
      await linkGet(storeId);
    } catch (e) {
      console.log(e);
    } finally {
      await setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const changeState = async (linkid, state, management) => {
    try {
      await setLoading(true);
      await linkPut(linkid, state, management);
      fetch();
    } catch (e) {
      await setLoading(false);
    }
  };

  return (
    loading ? (
      <CTLoading />
    ) : (
      <LinkProgressView
        login={storeId}
        total={links.total}
        results={links.results}
        changeState={changeState}
      />
    )
  );
};

export default LinkProgressHistory;
