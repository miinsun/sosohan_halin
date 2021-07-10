import React from "react";
import FindingIdLink from "./components/FindingIdLink";
import FindingPwLink from "./components/FindingPwLink";
import LoginForm from "./components/LoginForm";
import SignInLink from "./components/SignInLink";

const Login = () => (
  <div className="Login">
    <LoginForm />
    <SignInLink /> | <FindingIdLink /> | <FindingPwLink />
  </div>
);

export default Login;
