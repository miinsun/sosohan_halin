/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Card, Stack, Badge,
} from "react-bootstrap";
import { Shop } from "react-bootstrap-icons";

const Coupon = ({ consumerCoupon }) => (
  <div>
    <i className="bi bi-shop" />
    <Card>
      <Card.Footer style={{ fontSize: "14px" }}>
        <small className="text-muted">{consumerCoupon.remainingDay}일 남았습니다.</small>
      </Card.Footer>
      <Stack direction="horizontal" gap={2}>
        <Card.Img
          variant="bottom"
          src={consumerCoupon.coupon.store.logoImage}
          style={{ width: "15%", paddingLeft: "2%" }}
        />
        <Card.Body style={{ paddingLeft: "0%" }}>
          <Stack direction="horizontal" gap={2}>
            <Stack gap={1} style={{ width: "70%" }}>
              <Card.Text style={{ verticalAlign: "center" }}>
                <Badge pill style={{ backgroundColor: "#a1a1aa" }}>
                  <Shop style={{ paddingBottom: "2px", paddingTop: "0px" }} /> {consumerCoupon.coupon.store.name}
                </Badge>
              </Card.Text>

              <Card.Title style={{ fontWeight: "bold" }}>{consumerCoupon.coupon.name}</Card.Title>

              <Card.Text style={{ fontSize: "13px" }}>{consumerCoupon.coupon.description}</Card.Text>

              <Card.Text className="mb-2 text-muted" style={{ fontSize: "10px" }}>
                {consumerCoupon.coupon.finishDate} 까지 사용 가능
              </Card.Text>
            </Stack>

            <div className="vr" />

            <Card.Text style={{ width: "15%", textAlign: "center", fontSize: "90%" }}>
              {consumerCoupon.state === 1 ? (
                <>사용<br />가능</>
              ) : (
                <>사용<br />완료</>
              )}
            </Card.Text>
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
