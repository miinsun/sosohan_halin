package com.hi031.shh.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hi031.shh.domain.ReceiptWrapper;
import com.hi031.shh.service.ShhFacade;

@RestController
@RequestMapping("/api/v1/receipt")
public class ReceiptController {

	@Autowired
	private ShhFacade shh;
	
	@ResponseBody
	@GetMapping
	public ReceiptWrapper isInMyCoupon( // 당일에 해당 가게 쿠폰을 만든 적이 있으면 true, 없으면 false
			@RequestParam(value = "storename", required = true) String storeName, 
			@RequestParam(value = "businessnum", required = true) String businessNum,
			@RequestParam(value = "date", required = true) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate date,
			@RequestParam(value = "consumeruserid", required = true) String consumerUserId) throws Exception {
		return shh.isinReceipt(storeName, businessNum, consumerUserId, date);
	}
	
}
