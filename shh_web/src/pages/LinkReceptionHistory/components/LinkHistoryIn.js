import Qs from "query-string";
import React, { useEffect } from "react";
import { CTLoading, useLoading, useLink } from "../../../components";
import LinkHistoryInView from "./LinkHistoryInView";

const LinkHistoryIn = () => {
  const { links, linkGetIn, linkPut } = useLink();
  const { loading, setLoading } = useLoading(true);
  const userId = sessionStorage.getItem("sessionId");

  const fetch = async () => {
    try {
      await linkGetIn(2);
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
        total={links.total}
        results={links.results}
        changeState={changeState}
      />
    )
  );
};

export default LinkHistoryIn;
