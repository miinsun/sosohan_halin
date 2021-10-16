import React, { useState } from "react";
import {
  Form, FormGroup, Button, FloatingLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = ({ login }) => {
  const [data, setData] = useState({
    businessUserId: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form>
      <FormGroup controlId="businessUserId">
        <FloatingLabel className="mb-3" controlId="businessUserId" label="아이디">
          <Form.Control size="lg" type="text" name="businessUserId" onChange={handleChange} />
        </FloatingLabel>
      </FormGroup>
      <FormGroup controlId="password">
        <FloatingLabel className="mb-3" controlId="password" label="비밀번호">
          <Form.Control size="lg" type="password" name="password" onChange={handleChange} />
        </FloatingLabel>
      </FormGroup>
      <Form.Group className="mb-3" controlId="rememberMe">
        <Form.Check type="checkbox" label="아이디 저장" />
      </Form.Group>
      <div className="text-center">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link
          className="w-100 my-3 btn btn-lg btn-outline-primary text-primary"
          type="button"
          onClick={() => { login(data); }}
        >
          로그인
        </Link>
      </div>
    </Form>

  // <form>
  //   <div className="form-floating">
  //     <input
  //       type="text"
  //       name="businessUserId"
  //       className="form-control input_user"
  //       onChange={handleChange}
  //     />
  //     {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
  //     <label htmlFor="businessUserId">ID</label>
  //   </div>
  //   <div className="form-floating">
  //     <input type="password" name="password" className="form-control" onChange={handleChange} />
  //     {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
  //     <label htmlFor="floatingPassword">Password</label>
  //   </div>
  //   <div className="checkbox mb-3">
  //     {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
  //     <label>
  //       <input type="checkbox" defaultValue="remember-me" /> Remember me
  //     </label>
  //   </div>
  //   {/* <Link className="w-100btn btn-lg btn-secondary" onClick={login}>Login</Link> */}
  //   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
  //   <Link className="w-100 btn btn-lg btn-primary" type="button" onClick={login}>Login</Link>
  // </form>
  );
};

export default LoginForm;
