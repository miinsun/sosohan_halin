import React from 'react'
import ScreenMyCoupons from "./MyCoupons";
import AppBar from "../../layout/AppBar/AppBar";


const MyCoupons = ({ }) => {
  return (
    <>
    <AppBar title = "쿠폰 리스트" />
    <ScreenMyCoupons />
    </>
  )
}

export default MyCoupons;
