import Qs from "query-string";
import React, { useEffect } from "react";
import { CTLoading, useLoading, useLink } from "../../../components";
import LinkHistoryOutView from "./LinkHistoryOutView";

const LinkHistoryOut = () => {
  const { links, linkGetOut, linkPut } = useLink();
  const { loading, setLoading } = useLoading(true);
  const userId = sessionStorage.getItem("sessionId");

  const fetch = async () => {
    try {
      await linkGetOut(2);
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
      <LinkHistoryOutView
        total={links.total}
        results={links.results}
        changeState={changeState}
      />
    )
  );
};

export default LinkHistoryOut;
