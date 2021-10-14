import React from 'react'
import ScreenCouponList from './CouponList';
import AppBar from "../../layout/AppBar/AppBar";


const CouponList = ({route}) => {
  return (
    <>
    <AppBar title = "" />
    <ScreenCouponList storeName={route.params.storeName} receiptDate={route.params.receiptDate} />
    </>
  )
}

export default CouponList;
