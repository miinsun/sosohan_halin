/* eslint-disable import/no-named-as-default */
import React, { useEffect } from "react";
import MyPageSideBar from "../../MyPageSidebar";
import { useUser } from "../../components";

import MyStoreRegi from "./components/MyStoreRegi";

const StoreRegistration = () => {
  const { storeGet } = useUser();

  useEffect(() => {
    const fetch = async () => {
      try {
        await storeGet(2);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <div>
      <MyPageSideBar />
      <MyStoreRegi />
    </div>
  );
};

export default StoreRegistration;
