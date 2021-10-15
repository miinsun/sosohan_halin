import React from 'react'
import ScreenCouponList from './CouponList';
import AppBar from "../../layout/AppBar/AppBar";


const CouponList = ({route}) => {
  return (
    <>
    <AppBar title = "" />
    <ScreenCouponList store={route.params.store} receiptDate={route.params.receiptDate} navigation={route.params.navigation}/>
    </>
  )
}

export default CouponList;
