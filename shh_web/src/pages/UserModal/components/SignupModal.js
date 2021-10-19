import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupModal = ({
  signup, handleChange, show, close, setModalPage, initializeModal,
}) => (
  <Modal
    id="userModal"
    size="md"
    dialogClassName="my-modal"
    show={show}
    onHide={() => { close(); initializeModal(); }}
  >
    <Modal.Header closeButton>
      <span className="text-dark">회원 가입</span>
    </Modal.Header>

    <Modal.Body>
      <form className="SignupForm">
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="businessUserId">ID</label>
          <input name="businessUserId" className="form-control" type="text" onChange={handleChange} />
          <p />
        </div>
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password">패스워드</label>
          <input name="password" className="form-control" type="password" onChange={handleChange} />
          <p />
        </div>
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="passwordConfirm">패스워드 확인</label>
          <input name="passwordConfirm" className="form-control" type="password" onChange={handleChange} />
          <p />
        </div>
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="name">이름</label>
          <input name="name" className="form-control" type="text" onChange={handleChange} />
          <p />
        </div>
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">이메일</label>
          <input name="email" className="form-control" type="text" onChange={handleChange} />
          <p />
        </div>
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="businessNum">사업자 등록번호</label>
          <input name="businessNum" className="form-control" type="text" onChange={handleChange} />
          <p />
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="defaultCheck12" />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="defaultCheck12" className="grey-text">Accept the
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="blue-text"> Terms and Conditions</a>
          </label>
        </div>

      </form>
    </Modal.Body>

    <Modal.Footer>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link className="btn btn-outline-secondary" onClick={() => { setModalPage("login"); }}>뒤로 가기</Link>{" "}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link className="btn btn-primary" onClick={signup}>가입하기 </Link>
    </Modal.Footer>
  </Modal>
);
export default SignupModal;
