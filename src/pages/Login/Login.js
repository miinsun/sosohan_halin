import React from "react";
import {
  Modal,
} from "react-bootstrap";
import FindingIdLink from "./components/FindingIdLink";
import FindingPwLink from "./components/FindingPwLink";
import LoginForm from "./components/LoginForm";
import SignupLink from "./components/SignupLink";
import "../../styles/form-sign.css";

const Login = () => (
  // <div className="Login">
  // <div className="form-body">
  //   <main className="form-signin">
  //     <LoginForm />
  //     <SignInLink /> | <FindingIdLink /> | <FindingPwLink />
  //   </main>
  // </div>
  // </div>

  <>
    <Modal.Header closeButton>
      <Modal.Title>Login</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <LoginForm />
    </Modal.Body>

    <Modal.Footer>
      <SignupLink />
      <FindingIdLink /> <FindingPwLink />
    </Modal.Footer>
  </>
);

export default Login;

// { /* <main class="form-signin">
//   <form>
//     <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
//     <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

//     <div class="form-floating">
//       <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
//       <label for="floatingInput">Email address</label>
//     </div>
//     <div class="form-floating">
//       <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
//       <label for="floatingPassword">Password</label>
//     </div>

//     <div class="checkbox mb-3">
//       <label>
//         <input type="checkbox" value="remember-me"> Remember me
//       </label>
//     </div>
//     <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//     <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
//   </form>
// </main> */ }
