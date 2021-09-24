import React from "react";
import { Link } from "react-router-dom";
import LinkAlarm from "../../pages/LinkAlarm";
import SelectShop from "./SelectShop";

const UserArea = () => (
  <div className="UserArea container">
    <div className="row">
      <div className="col">
        <Link to="/login" className="btn btn-secondary">로그인</Link>
      </div>
      <div className="col">
        <SelectShop />
      </div>
      <div className="col">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/editaccount">username</Link>
      </div>
      <div className="col">
        <LinkAlarm />
      </div>
      <div className="col">
        <Link to="/" className="btn btn-secondary">로그아웃</Link>
      </div>
    </div>
  </div>

);

export default UserArea;
