import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../components";
import LinkAlarm from "../../pages/LinkAlarm";
import SelectShop from "./SelectShop";

const sessionId = sessionStorage.getItem("sessionId");

const UserArea = () => {
  const { userLogout } = useUser();

  const logout = async () => {
    try {
      await userLogout();
      sessionStorage.removeItem("sessionId");
    } catch (err) {
      alert(err);
      console.log(err);
    }
    document.location.href = "/";
  };

  return (
    <div className="UserArea container">
      <div className="row">
        {!sessionStorage.getItem("sessionId") && (
          <div className="GuestArea">
            <div className="col">
              <Link to="/login" className="btn btn-secondary">로그인</Link>
            </div>
          </div>
        )}
        {sessionStorage.getItem("sessionId") && (
          <div className="LoginArea">
            <div className="col">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/editaccount">{sessionId}님</Link>
            </div>
            <div className="col">
              <SelectShop />
            </div>
            <div className="col">
              <LinkAlarm />
            </div>
            <div className="col">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link onClick={logout} className="btn btn-secondary">로그아웃</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserArea;
