/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CTOneButton, useCoupon } from "../../../components";

const MyCouponList = () => {
  const { couponList, couponDelete } = useCoupon();

  return (
    couponList ? (
      <table className="table table-hover">
        <thead>
          <tr>
            {/* <th scope="col">{this.props.no}</th>
            <th scope="col">{this.props.name}</th>
            <th scope="col">{this.props.description}</th>
            <th scope="col">{this.props.validity}</th>
            <th scope="col">{this.props.updateOrDelBtn}</th> */}
            <th scope="col">No</th>
            <th scope="col">쿠폰명</th>
            <th scope="col">쿠폰 설명</th>
            <th scope="col">유효기한</th>
            <th scope="col">수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{couponList.result.name}</td>
            <td>{couponList.result.descripttion}</td>
            <td>{couponList.result.startDate} - {couponList.result.startDate}</td>
            <td><CTOneButton title="수정" /> <CTOneButton title="삭제" /></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><CTOneButton title="수정" /> <CTOneButton title="삭제" /></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <td><CTOneButton title="수정" /> <CTOneButton title="삭제" /></td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div>쿠폰 정보가 없습니다.</div>
    )
  );
};

export default MyCouponList;
