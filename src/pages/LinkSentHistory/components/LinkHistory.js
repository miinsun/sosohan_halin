import Qs from "query-string";
import React, { useEffect } from "react";
import { CTLoading, useLoading, useLink } from "../../../components";
import LinkHistoryView from "./LinkHistoryView";

const LinkHistory = () => {
  const { links, linkGetIn, linkPut } = useLink();
  const { loading, setLoading } = useLoading(true);

  const fetch = async () => {
    try {
      await linkGetIn("0");
    } catch (e) {
      console.log(e);
    } finally {
      await setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const changeState = async (linkInfo) => {
    try {
      const link = linkInfo;

      await setLoading(true);
      await linkPut(link);
      fetch();
    } catch (e) {
      await setLoading(false);
    }
  };

  return (
    loading ? (
      <CTLoading />
    ) : (
      <LinkHistoryView
        total={links.total}
        results={links.results}
        changeState={changeState}
      />
    )
  );
};

export default LinkHistory;
