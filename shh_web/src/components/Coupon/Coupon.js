/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Card, Stack,
} from "react-bootstrap";
import { Shop } from "react-bootstrap-icons";

const Coupon = ({ consumerCoupon }) => (
  <div>
    <i className="bi bi-shop" />
    <Card>
      <Card.Footer>
        <small className="text-muted">3일 남았습니다.</small>
      </Card.Footer>
      <Stack direction="horizontal" gap={3}>
        <Card.Img
          variant="bottom"
          // eslint-disable-next-line no-octal-escape
          src="https://upload.wikimedia.org/wikipedia/commons/6/63/Toss-logo.png"
          style={{ width: "15%", paddingLeft: "2%" }}
        />
        <Card.Body style={{ paddingLeft: "0%" }}>
          <Stack direction="horizontal" gap={3}>
            <Stack gap={1} style={{ width: "60%" }}>
              <Card.Text style={{ verticalAlign: "center" }}>
                <Shop style={{ paddingBottom: "2px", paddingTop: "0px" }} /> {consumerCoupon.coupon.store.name}
              </Card.Text>

              <Card.Title>{consumerCoupon.coupon.name}</Card.Title>

              <Card.Text>{consumerCoupon.coupon.description}</Card.Text>

              {consumerCoupon.coupon.validity ? (
                <Card.Text className="mb-2 text-muted">다운로드 후 {consumerCoupon.coupon.validity}일 간 사용 가능 </Card.Text>
              ) : (
                <Card.Text className="mb-2 text-muted">{consumerCoupon.coupon.finishDate}까지 사용 가능</Card.Text>
              )}

            </Stack>

            <div className="vr" />

            {consumerCoupon.state === 1 ? (
              <Card.Text style={{ width: "20%" }}>
                사용가능
              </Card.Text>
            ) : (
              <Card.Text style={{ width: "20%" }}>
                사용완료
              </Card.Text>
            )}
          </Stack>
        </Card.Body>
      </Stack>
    </Card>
  </div>

);

Coupon.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  consumerCoupon: PropTypes.object,
};

Coupon.defaultProps = {
  consumerCoupon: {},
};

export default Coupon;
