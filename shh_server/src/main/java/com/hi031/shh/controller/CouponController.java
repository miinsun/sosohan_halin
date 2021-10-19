package com.hi031.shh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hi031.shh.domain.Coupon;
import com.hi031.shh.domain.ResponseWrapper;
import com.hi031.shh.service.ShhFacade;

@RestController
@RequestMapping("/api/v1/coupon")
public class CouponController {

	@Autowired
	private ShhFacade shh;
	
	private ResponseWrapper responseWrapper;
	
	@ResponseBody
	@RequestMapping(method=RequestMethod.POST)
	public Coupon insertCoupon(@RequestBody Coupon coupon) throws Exception {
		return shh.insertCoupon(coupon);
	}
	
	@ResponseBody
	@RequestMapping(path="/{couponId}", method=RequestMethod.PUT)
	public Coupon updateCoupon(@RequestBody Coupon coupon) throws Exception {
		return shh.updateCoupon(coupon);
	}
	
	@ResponseBody
	@RequestMapping(method=RequestMethod.DELETE)
	public void removeCoupon(@RequestBody Coupon coupon) throws Exception {
		shh.removeCoupon(coupon);
	}
	
	@ResponseBody
	@RequestMapping(path="/{storeId}/{couponId}", method=RequestMethod.GET)
	public Coupon getCoupon(@PathVariable int storeId, @PathVariable int couponId) throws Exception {
		return shh.getCoupon(couponId);
	}
	
	@ResponseBody
	@RequestMapping(path="/{storeId}", method=RequestMethod.GET)
	public ResponseWrapper getCoupons(@PathVariable int storeId) throws Exception {
		List<Coupon> results = shh.getCoupons(storeId);
		long total = results.size();
		
		responseWrapper = new ResponseWrapper(total, (List<Object>)(Object)results);
		
		return responseWrapper;
	}
	
}
