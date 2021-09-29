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
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleChange = (e) => {
    const storeIndex = e.target.value;
    const { storeId } = myStores.results[storeIndex];
    sessionStorage.setItem("currentStoreId", storeId);
    console.log(`current store id: ${storeId}, 
    current store name: ${myStores.results[storeIndex].name}`);
  };

  return (
    <select onChange={handleChange}>
      <option value="-1">=내 상점 선택=</option>
      {myStores.total > 0 && myStores.results.map((data, index) => (
        <option value={index}>{data.name}</option>))}
    </select>

  );
};

export default SelectShop;
