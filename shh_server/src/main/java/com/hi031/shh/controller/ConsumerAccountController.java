package com.hi031.shh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hi031.shh.domain.BusinessAccount;
import com.hi031.shh.domain.ConsumerAccount;
import com.hi031.shh.service.ShhFacade;

@RestController
public class ConsumerAccountController {

	@Autowired
	private ShhFacade shh;

	// 로그인
	@ResponseBody
	@RequestMapping(value="/api/v1/consumerLogin", method=RequestMethod.POST)
	public ConsumerAccount consumerLogin(@RequestBody String consumerUserId, @RequestBody String password) throws Exception {
		// session 설정 (방법 생각..)
		// ...
		
		return shh.consumerLogin(consumerUserId, password);
	}
	
	// 로그아웃
	@ResponseBody
	@RequestMapping(value="/api/v1/consumerLogout", method=RequestMethod.GET)
	public ConsumerAccount consumerLogout(@RequestBody ConsumerAccount userSession) throws Exception {
		// session 해제 (방법 생각..)
		// ...
		
		return userSession;
	}
	
	// 회원 가입
	@ResponseBody
	@RequestMapping(value="/api/v1/consumerSignup", method=RequestMethod.POST)
	public ConsumerAccount insertConsumerAccount(@RequestBody ConsumerAccount consumerAccount) throws Exception {
		return shh.insertConsumerAccount(consumerAccount);
	}

	// 아이디 찾기
	@ResponseBody
	@RequestMapping(value="/api/v1/findingConsumerUserId", method=RequestMethod.POST)
	public String findUserId(@RequestBody String name, @RequestBody String email) throws Exception {
		return shh.findConsumerUserId(name, email);
	}
	
	// 패스워드 찾기
	@ResponseBody
	@RequestMapping(value="/api/v1/findingConsumerPw", method=RequestMethod.GET)
	public ConsumerAccount findUserPw(@RequestBody String consumerUserId,
			@RequestBody String email) throws Exception {
		return shh.findConsumerPw(consumerUserId, email);
	}

	// 회원 수정 정보 가져오기
	@ResponseBody
	@RequestMapping(path="/api/v1/consumerUser", method=RequestMethod.GET)
	public ConsumerAccount getConsumerAccount(@PathVariable String consumerUserId) throws Exception {
		return shh.getConsumerAccount(consumerUserId);
	}
	
	// 회원 수정 submit
	@ResponseBody
	@RequestMapping(value="/api/v1/consumerUser", method=RequestMethod.PUT)
	public ConsumerAccount updateConsumerAccount(@RequestBody ConsumerAccount consumerAccount) throws Exception {
		return shh.updateConsumerAccount(consumerAccount);
	}
	
	// 회원 탈퇴
	@ResponseBody
	@RequestMapping(value="/api/v1/consumerUser", method=RequestMethod.DELETE)
	public ConsumerAccount removeConsumerAccount(@RequestBody ConsumerAccount consumerAccount) throws Exception {
		return shh.removeConsumerAccount(consumerAccount);
	}

	
}
