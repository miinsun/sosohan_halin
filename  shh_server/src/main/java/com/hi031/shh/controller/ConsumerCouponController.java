package com.hi031.shh.controller;

import java.time.LocalDate;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hi031.shh.domain.BusinessAccount;
import com.hi031.shh.domain.ConsumerAccount;
import com.hi031.shh.domain.ConsumerCoupon;
import com.hi031.shh.domain.Coupon;
import com.hi031.shh.domain.Receipt;
import com.hi031.shh.domain.ResponseWrapper;
import com.hi031.shh.service.ShhFacade;

@RestController
@RequestMapping("/api/v1/coupon/user")
public class ConsumerCouponController {

	@Autowired
	private ShhFacade shh;
	
	private ResponseWrapper responseWrapper;
	
	@Autowired
	private HttpSession session;
	
//	@ResponseBody
//	@RequestMapping(path="/{couponId}", method=RequestMethod.POST)
//	public ConsumerCoupon insertConsumerCoupon(@RequestBody Receipt receipt, @PathVariable int couponId) throws Exception {
//		System.out.println(couponId);
//		return shh.insertConsumerCoupon(receipt, couponId);
//	}

	@ResponseBody
	@RequestMapping(path="/{receiptDate}/{storeId}", method=RequestMethod.POST)
	public ConsumerCoupon insertConsumerCoupon(@RequestBody ConsumerCoupon consumerCoupon, @DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable LocalDate receiptDate, @PathVariable int storeId) throws Exception {
		System.out.println(consumerCoupon.getConsumerCouponId());
//		return shh.insertConsumerCoupon(receipt, couponId);
		
		// session 적용 후 수정
//		String consumerUserId = ((ConsumerAccount) session.getAttribute("consumerUserSession")).getConsumerUserId();
		String consumerUserId = "hy";
		return shh.insertConsumerCoupon(consumerCoupon, receiptDate, storeId, consumerUserId);
	}
	
	@ResponseBody
	@RequestMapping(method=RequestMethod.PUT)
	public ConsumerCoupon updateConsumerCoupon(@RequestBody ConsumerCoupon coupon) throws Exception {
		return shh.updateConsumerCoupon(coupon);
	}
	
	@ResponseBody
	@RequestMapping(path="/{consumerCouponId}", method=RequestMethod.GET)
	public ConsumerCoupon getConsumerCoupon(@PathVariable int consumerCouponId) throws Exception {
		return shh.getConsumerCoupon(consumerCouponId);
	}
	
	@ResponseBody
	@RequestMapping(path="/{consumerUserId}/{state}", method=RequestMethod.GET)
	public ResponseWrapper getConsumerCoupons(@PathVariable String consumerUserId, @PathVariable int state) throws Exception {
		System.out.println("consumerUserId: " + consumerUserId + ", state: " + state);

		List<ConsumerCoupon> results = shh.getConsumerCoupons(consumerUserId, state);
		
		long total = results.size();
		
		//콘솔 확인
		System.out.println("쿠폰 총 :" + total);
		for (int i = 0; i < total; i++) {
			System.out.println(i + "번째 쿠폰 id: " + results.get(i).getConsumerCouponId());
		}
		
		responseWrapper = new ResponseWrapper(total, (List<Object>)(Object)results);
		return responseWrapper;
	}
	
	
//	@ResponseBody
//	@RequestMapping(path="/{storeId}", method=RequestMethod.GET)
//	public ResponseWrapper getConsumerCoupons(@PathVariable int consumerId) throws Exception {
//		List<Coupon> results = shh.getConsumerCoupons(consumerId);
//		long total = shh.getCount(consumerId);
//		
//		responseWrapper = new ResponseWrapper(total, (List<Object>)(Object)results);
//		
//		return responseWrapper;
//	}
	
}
