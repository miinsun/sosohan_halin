import Qs from "query-string";
import React, { useEffect } from "react";
import { CTLoading, useLoading, useLink } from "../../../components";
import LinkHistoryInView from "./LinkHistoryInView";

const storeId = sessionStorage.getItem("currentStoreId");

const LinkHistoryIn = () => {
  const { links, linkGetIn, linkPut } = useLink();
  const { loading, setLoading } = useLoading(true);

  const fetch = async () => {
    try {
      await linkGetIn(storeId);
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
      <LinkHistoryInView
        login={storeId}
        total={links.total}
        results={links.results}
        changeState={changeState}
      />
    )
  );
};

export default LinkHistoryIn;
