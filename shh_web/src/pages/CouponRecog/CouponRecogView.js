/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { CTLogo, Coupon } from "../../components";
import Precautions from "./components/Precautions";

function alertState() {
  alert("기한이 만료된 쿠폰입니다.");
}

const CouponRecogView = ({ consumerCoupon, update }) => (
  <div>
    {consumerCoupon.state === -1 ? (
      alertState()
    ) : (
      <div className="CouponRecog container-sm themed-container">
        <CTLogo margin="30px" />
        <Coupon consumerCoupon={consumerCoupon} />
        <br /><br />
        <Precautions />
        <br /><br /> <br />
        <div className="d-grid gap-2">
          {consumerCoupon.state === 1 ? (
            <Button
              variant="primary"
              className="rounded-pill"
              size="md"
              onClick={() => { update(consumerCoupon); }}
            >
              사용하기
            </Button>
          ) : (
            <Button variant="secondary" className="rounded-pill" size="md" disabled>
              사용완료
            </Button>
          )}
          <br /><br />
        </div>
      </div>
    )}
  </div>
);

CouponRecogView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  consumerCoupon: PropTypes.object,
  update: PropTypes.func,
};

CouponRecogView.defaultProps = {
  consumerCoupon: {},
  update: () => { },
};

export default CouponRecogView;
