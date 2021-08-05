import React from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const SignInLink = () => (
// const history = useHistory();

  // const gotoSignup = () => {
  //   history.push("/signup");
  // };

  <span className="SignInLink">
    <Link className="btn btn-secondary" to="/signup">회원가입</Link>
  </span>
);
export default SignInLink;
