import React from "react";
import { Link } from "react-router-dom";
import SelectShop from "./SelectShop";

const UserArea = () => (
  <div className="UserArea">
    <Link to="/login" className="btn btn-secondary">로그인</Link>
    <SelectShop />
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <Link to="/editaccount">username님</Link>
    <Link to="/linkalarm" className="btn btn-warning">알림 확인</Link>
    <Link to="/" className="btn btn-secondary">로그아웃</Link>
  </div>

);

export default UserArea;
