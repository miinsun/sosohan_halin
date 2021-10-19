import { is } from "immutable";
import React from "react";
import {
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const FindingIdModal = ({
  findId, handleChange, show, close, foundId, setModalPage, initializeModal,
}) => (
  <Modal
    id="userModal"
    size="sm"
    dialogClassName="my-modal"
    show={show}
    onHide={() => { close(); setModalPage("login"); initializeModal(); }}
  >
    <Modal.Header closeButton>
      <Modal.Title>아이디 찾기</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {foundId === null
        ? (
          <form className="FindIdForm">
            <p>가입 정보를 입력하세요.</p>
            <div className="md-form">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="name">이름</label>
              <input name="name" className="form-control" type="text" onChange={handleChange} />
              <p />
            </div>
            <div className="md-form">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="email">이메일</label>
              <input name="email" className="form-control" type="text" onChange={handleChange} />
              <p />
            </div>
          </form>
        ) : (
          <div className="IdResult">
            아이디 찾기 결과입니다.<br />
            <span>{foundId}</span>
          </div>
        )}
    </Modal.Body>

    <Modal.Footer>
      {foundId === null ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn btn-outline-secondary" onClick={() => { setModalPage("login"); }}>뒤로 가기</Link>{" "}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn btn-primary" onClick={findId}>아이디 찾기</Link>
        </>
      )
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        : (<Link className="btn btn-primary" onClick={() => { setModalPage("login"); }}>로그인</Link>)}
    </Modal.Footer>
  </Modal>
);

export default FindingIdModal;
