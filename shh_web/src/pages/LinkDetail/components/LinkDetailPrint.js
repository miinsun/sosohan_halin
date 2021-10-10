import Qs from "query-string";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTLoading, useLoading, useLink } from "../../../components";
import LinkDetailPrintView from "./LinkDetailPrintView";

const storeId = sessionStorage.getItem("currentStoreId");

const MyStorePrint = () => {
  const { link, linkGet } = useLink();
  const { loading, setLoading } = useLoading(true);
  const location = useLocation();

  const query = Qs.parse(location.search);

  const fetch = async () => {
    try {
      await linkGet("0", "0");
    } catch (e) {
      console.log(e);
    } finally {
      await setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (

    loading ? (
      <CTLoading />
    ) : (
      <LinkDetailPrintView
        result={link}
      />
    )
  );
};

export default MyStorePrint;
