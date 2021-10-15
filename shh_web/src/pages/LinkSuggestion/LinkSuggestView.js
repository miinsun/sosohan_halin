/* eslint-disable react/style-prop-object */
/* eslint-disable max-len */
import AOS from "aos";
import React, { useEffect, useState } from "react";
import {
  Modal, Button, Form, Row, Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../../styles/banner.css";

AOS.init({
  duration: 2000,
});

const LinkSuggestView = ({
  proposer,
  insert,
  receiver,
  data,
  setData,
}) => {
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="linkSuggestion">
      <div data-aos="fade-left" className="back-rtimg text-end text-primary zindex-dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
        </svg>
      </div>
      <div data-aos="fade-up-right" className="back-lbimg text-end text-primary zindex-dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="500" fill="currentColor" className="bi bi-envelope-open-fill" viewBox="0 0 16 16">
          <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z" />
        </svg>
      </div>
      <div data-aos="fade-up-left" className="back-rbimg text-end text-primary zindex-dropdown">
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="currentColor" className="bi bi-mailbox2" viewBox="0 0 16 16">
          <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z" />
          <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z" />
        </svg>
      </div>

      <div className="title mb-3 text-primary"> 연계 제안 </div>
      <div className="shadow p-3 mb-5 bg-body rounded ">
        <Form>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="mb- mx-2 text-primary">&apos;{receiver.name}&apos;에 연계 제안을 보냅니다</Form.Label>
            <Form.Control
              as="textarea"
              rows={10}
              name="content"
              onChange={handleChange}
              placeholder={`${proposer.name}와 ${receiver.name}의 제안을 원합니다`}
            />
          </Form.Group>
        </Form>

        <div className="DoBtn">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-secondary me-md-2 mx-3" type="button">
              취소
            </button>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link className="btn btn-primary" onClick={insert}>
              제안하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSuggestView;
