import React from "react";
import SelectShop from "./SelectShop";

const UserArea = () => (
  <div className="UserArea">
    <SelectShop />
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#">username님</a>
    <button type="button">알림 확인</button>
    <button type="button">로그아웃</button>
  </div>

);

export default UserArea;
