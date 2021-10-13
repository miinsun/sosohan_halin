import Qs from "query-string";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CTLoading, useLoading, useStore } from "../../components";
import StoreDetailView from "./StoreDetailView";

const StoreDetail = () => {
  const { store, storeGet } = useStore();
  const { loading, setLoading } = useLoading(true);
  const location = useLocation();

  const { storeId } = location.state;

  const fetch = async () => {
    try {
      await storeGet(storeId);
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
      <StoreDetailView
        store={store}
      />
    )
  );
};

export default StoreDetail;
