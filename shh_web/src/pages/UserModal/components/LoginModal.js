import React from "react";
import {
  Form, FormGroup, FloatingLabel, Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginModal = ({
  login, handleChange, show, close, setModalPage, initializeModal,
}) => (
  <Modal
    id="userModal"
    size="sm"
    dialogClassName="my-modal"
    show={show}
    onHide={() => { close(); initializeModal(); }}
  >
    <Modal.Header closeButton>
      {/* <Modal.Title className="text-muted">로그인</Modal.Title> */}
      {/* <span className="text-muted">로그인</span> */}
      {/* <span className="text-muted">모달 헤더</span> */}
      <span className="text-muted">로그인</span>
    </Modal.Header>
    <Modal.Body>
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
          <div className="FindingIdLink text-center text-muted my-2">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link class="text-reset" onClick={() => { setModalPage("findingId"); }}>아이디</Link> /&nbsp;
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link class="text-reset" onClick={() => { setModalPage("findingPw"); }}>패스워드</Link> 찾기
          </div>
        </div>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      {/* <SignupLink close={close} /> */}
      {/* <span>모달 푸터</span> */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        className="text-reset"
        onClick={() => { setModalPage("signup"); }}
      >아직 회원이 아니신가요?
      </Link>

      {/* <FindingIdLink close={close} /> <FindingPwLink close={close} /> */}
    </Modal.Footer>
  </Modal>
);

export default LoginModal;
