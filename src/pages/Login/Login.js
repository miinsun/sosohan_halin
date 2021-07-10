import React from "react";
import LoginForm from "./components/LoginForm";
import SignInLink from "./components/SignInLink";
import FindingIdLink from "./components/FindingIdLink";
import FindingPwLink from "./components/FindingPwLink";

const Login = () => (
  <div className="Login">
    <LoginForm />
    <SignInLink /> | <FindingIdLink /> | <FindingPwLink />
  </div>
);

export default Login;
