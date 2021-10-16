import React, { useEffect, useState } from "react";
import {
  Nav, NavDropdown,
} from "react-bootstrap";
import { CTLoading, useLoading, useStore } from "../../components";

const SelectShop = ({ fetch }) => {
  const { storeGetMy, myStores } = useStore();
  const { loading, setLoading } = useLoading(true);

  const [currentStore, setCurrentStore] = useState(
    sessionStorage.getItem("currentStoreId") == null
      ? "상점 모드 선택"
      : sessionStorage.getItem("currentStoreName"),
  );

  // const fetch = async () => {
  //   try {
  //     await storeGetMy(sessionStorage.getItem("sessionId"));
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     await setLoading(false);
  //   }
  // };

  useEffect(() => {
    fetch();
  }, []);

  const handleSelect = (eventKey) => {
    sessionStorage.setItem("currentStoreId", myStores.results[eventKey].storeId);
    sessionStorage.setItem("currentStoreName", myStores.results[eventKey].name);
    setCurrentStore(myStores.results[eventKey].name);
    // sessionStorage.setItem("currentStoreName", myStores.results[storeIndex].storeName);
    // setCurrentStore(myStores.results[storeIndex].storeName);
  };

  console.log(`current store id:${sessionStorage.getItem("currentStoreId")}`);
  console.log(`current store name:${sessionStorage.getItem("currentStoreName")}`);

  console.log(myStores);

  return (
    <>
      {myStores.total === 0
        ? (<Nav.Link href="/storeregistration">상점을 등록해보세요.</Nav.Link>
        )
        : (
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={currentStore}
            menuVariant="dark"
            onSelect={handleSelect}
          >
            {myStores.total > 0 && myStores.results.map((data, index) => (
              <NavDropdown.Item eventKey={index}>{data.name}</NavDropdown.Item>
            ))}
          </NavDropdown>
        )}
    </>
  );
};

export default SelectShop;
