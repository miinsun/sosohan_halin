import React, { useRef, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupModal = ({
  signup, handleChange, show, close, setModalPage, initializeModal,
  idValidation, pwValidation, pwConfirmValidation, emailValidation, busiNumValidation,
}) => (
  <Modal
    id="userModal"
    size="md"
    dialogClassName="my-modal"
    show={show}
    onHide={() => { close(); initializeModal(); }}

  >
    <Modal.Header
      closeButton
    >
      <span className="text-dark">회원 가입</span>
    </Modal.Header>

    <Modal.Body>
      <form className="SignupForm m-2">
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="businessUserId">ID</label>
          <input
            name="businessUserId"
            className="form-control form-control-lg"
            type="text"
            onChange={handleChange}
          />
          {idValidation === 0 && <small />}
          {idValidation === -1 && <small className="mx-1 text-danger">6~20자의 영문, 숫자만 사용 가능합니다.</small>}
          {idValidation === -2 && <small className="mx-1 text-danger">이미 존재하거나 탈퇴한 회원의 아이디입니다.</small>}
          {idValidation === 1 && <small className="mx-1 text-dark">사용 가능한 아이디입니다.</small>}
          <p />
        </div>
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password">패스워드</label>
          <input
            name="password"
            className="form-control form-control-lg"
            type="password"
            onChange={handleChange}
          />
          {pwValidation === 0 && <small />}
          {pwValidation === -1 && (
            <small className="mx-1 text-danger">10~16자의 영문, 숫자, 특수문자 조합만 사용 가능합니다.</small>
          )}
          {pwValidation === 1 && <small className="mx-1 text-dark">사용 가능한 패스워드입니다.</small>}
          <p />
        </div>
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="passwordConfirm">패스워드 확인</label>
          <input
            name="passwordConfirm"
            className="form-control form-control-lg"
            type="password"
            onChange={handleChange}
          />
          {pwConfirmValidation === 0 && <small />}
          {pwConfirmValidation === -1 && <small className="mx-1 text-danger">패스워드가 일치하지 않습니다.</small>}
          {pwConfirmValidation === 1 && <small className="mx-1 text-dark">패스워드가 일치합니다.</small>}
          <p />
        </div>
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="name">이름</label>
          <input
            name="name"
            className="form-control form-control-lg"
            type="text"
            onChange={handleChange}
          />
          <p />
        </div>
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">이메일</label>
          <input
            name="email"
            className="form-control form-control-lg"
            type="text"
            onChange={handleChange}
          />
          {emailValidation === 0 && <small />}
          {emailValidation === -1 && <small className="mx-1 text-danger">이메일이 형식에 맞지 않습니다.</small>}
          {emailValidation === 1 && <small />}

          <p />
        </div>
        <div className="md-form">
          <span className="text-danger">*</span>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="businessNum">사업자 등록번호</label>
          <input
            name="businessNum"
            className="form-control form-control-lg"
            type="text"
            onChange={handleChange}
          />
          {busiNumValidation === 0 && <small />}
          {busiNumValidation === -1 && <small className="mx-1 text-danger">사업자 등록번호는 10자리 숫자입니다.</small>}
          {busiNumValidation === 1 && <small />}
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
      <Link
        className="btn btn-outline-secondary"
        onClick={() => { setModalPage("login"); }}
      >뒤로 가기
      </Link>{" "}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        className="btn btn-primary"
        onClick={signup}
      >가입하기
      </Link>
    </Modal.Footer>
  </Modal>
);
export default SignupModal;
