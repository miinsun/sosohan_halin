import React, { useState } from "react";
import {
  Form, FormGroup, Button, FloatingLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = ({ login, handleChange }) => (
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
        onClick={login}
      >
        로그인
      </Link>
    </div>
  </Form>
);

export default LoginForm;
