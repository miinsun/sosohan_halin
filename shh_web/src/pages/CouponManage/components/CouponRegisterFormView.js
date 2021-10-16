/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */

import $ from "jquery";
import PropTypes from "prop-types";
import React from "react";
import {
  Modal, Button, Form, Row, Col,
} from "react-bootstrap";

const validityToReadonly = () => {
  if ($("#formBasicCheckbox").is(":checked")) {
    $("#validity").attr("disabled", true);
  } else {
    $("#validity").attr("disabled", false);
  }
};

const CouponRegisterFormView = ({
  confirmBtn, coupon, insert, update, data, setData, modalRef, show, setShow,
}) => {
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleChange = (e) => {
    setData({
      ...coupon,

      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleInsert}>
        + 등록하기
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title><b>쿠폰 {confirmBtn}</b></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>쿠폰명</Form.Label>
              <Form.Control
                type="text"
                placeholder="쿠폰명을 입력해주세요."
                onChange={handleChange}
                defaultValue={coupon ? coupon.name : ""}
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>쿠폰 설명</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                onChange={handleChange}
                defaultValue={coupon ? coupon.description : ""}
                name="description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>유효기한</Form.Label>
              <Row style={{ verticalAlign: "middle" }}>
                <Col column="true" lg={11}>
                  <Form.Control
                    type="text"
                    placeholder="유효기한을 입력해주세요."
                    aria-describedby="validityHelpBlock"
                    sm="11"
                    id="validity"
                    onChange={handleChange}
                    defaultValue={coupon && coupon.validity ? coupon.validity : ""}
                    name="validity"
                  />
                </Col>
                <Col><span className="align-baseline">일</span></Col>
              </Row>
              <Form.Text className="text-muted" id="validityHelpBlock" muted>
                ※ 다운로드 후 며칠간 사용 가능한지 설정합니다.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="유효기한을 다운로드 마감일까지" onClick={validityToReadonly} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>다운로드 시작 가능일</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={handleChange}
                defaultValue={coupon ? coupon.startDate : ""}
                name="startDate"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>다운로드 종료일</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={handleChange}
                defaultValue={coupon ? coupon.finishDate : ""}
                name="finishDate"
              />
            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            취소
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              if (confirmBtn === "등록") {
                insert(data);
              } else {
                update(data);
              }
              handleClose();
            }}
          >{confirmBtn}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CouponRegisterFormView.propTypes = {
  confirmBtn: PropTypes.string,
};

CouponRegisterFormView.defaultProps = {
  confirmBtn: "",
};

export default CouponRegisterFormView;
