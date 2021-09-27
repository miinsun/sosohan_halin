import React, { useEffect } from "react";
import { CTLoading, useLoading, useStore } from "../../components";

const SelectShop = () => {
  const { myStores, storeGetMy, storeRemove } = useStore();
  const { loading, setLoading } = useLoading(true);

  const fetch = async () => {
    try {
      await storeGetMy(sessionStorage.getItem("sessionId"));
    } catch (e) {
      console.log(e);
    } finally {
      await setLoading(false);
      sessionStorage.setItem("currentStoreIndex", 0);
      console.log(`current store id: ${sessionStorage.getItem("currentStoreIndex")}`);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleChange = (e) => {
    const storeIndex = e.target.value;
    sessionStorage.setItem("currentStoreIndex", storeIndex);
    console.log(`current store id: ${storeIndex}, 
    current store name: ${myStores.results[sessionStorage.getItem("currentStoreIndex")].name}`);
  };

  return (
    <select onChange={handleChange}>
      {myStores.total > 0 && myStores.results.map((data, index) => (
        <option value={index}>{data.name}</option>))}
    </select>

  );
};

export default SelectShop;
