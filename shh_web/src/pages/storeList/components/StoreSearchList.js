import Qs from "query-string";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTLoading, useLoading, useStore } from "../../../components";
import StoreSearchListView from "./StoreSearchListView";

const StoreSearchList = () => {
  const { allStores, storeGetAll } = useStore();
  const { loading, setLoading } = useLoading(true);
  const location = useLocation();

  const query = Qs.parse(location.search);

  console.log(query);
  console.log(Qs.stringify(query));

  const fetch = async () => {
    try {
      await storeGetAll();
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
      <StoreSearchListView
        total={allStores.total}
        results={allStores.results}
      />
    )
  );
};

export default StoreSearchList;
