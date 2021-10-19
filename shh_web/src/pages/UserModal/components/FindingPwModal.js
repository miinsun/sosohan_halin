import React from "react";
import {
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const FindingPwModal = ({
  findPw, handleChange, show, close, isPwFound, setModalPage, initializeModal,
}) => (
  <Modal
    id="userModal"
    size="sm"
    dialogClassName="my-modal"
    show={show}
    onHide={() => { close(); setModalPage("login"); initializeModal(); }}
  >
    <Modal.Header closeButton>
      <Modal.Title>패스워드 찾기</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {isPwFound === false
        ? (
          <form className="FindingPwForm">
            <p>가입 정보를 입력하세요.</p>
            <div className="md-form">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="businessUserId">ID</label>
              <input name="businessUserId" className="form-control" type="text" onChange={handleChange} />
              <p />
            </div>
            <div className="md-form">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email">등록된 이메일</label>
              <input name="email" className="form-control" type="text" onChange={handleChange} />
              <p />
            </div>
          </form>
        ) : (
          <div className="PwResult">
            등록하신 이메일로 임시 비밀번호를 전송하였습니다. <br />
            로그인 후 임시 비밀번호를 변경해주세요.
          </div>
        )}
    </Modal.Body>

    <Modal.Footer>
      {isPwFound === false ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn btn-outline-secondary" onClick={() => { setModalPage("login"); }}>뒤로 가기</Link>{" "}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn btn-primary" onClick={findPw}>임시 비밀번호 발급</Link>
        </>
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Link className="btn btn-primary" onClick={() => { setModalPage("login"); }}>로그인</Link>
      )}
    </Modal.Footer>
  </Modal>
);

export default FindingPwModal;
