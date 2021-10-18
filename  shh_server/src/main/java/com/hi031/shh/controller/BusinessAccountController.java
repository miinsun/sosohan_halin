package com.hi031.shh.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hi031.shh.domain.BusinessAccount;
import com.hi031.shh.service.ShhFacade;

@RestController
public class BusinessAccountController {

	@Autowired
	private ShhFacade shh;

	@Autowired
	private HttpSession session;
	
	// 濡쒓렇�씤
	@ResponseBody
	@RequestMapping(value="/api/v1/businessLogin/{businessUserId}/{password}", method=RequestMethod.POST)
	public String businessLogin(@PathVariable String businessUserId, @PathVariable String password) throws Exception {
		BusinessAccount businessAccount = shh.businessLogin(businessUserId, password);
		
		// session �꽕�젙 (諛⑸쾿 �깮媛�..)
		// ...
		if (businessAccount == null || businessAccount.getState() == 2) {
			System.out.println("user not found");
			throw new Exception("user not found");
		}
		else
			session.setAttribute("businessUserSession", businessAccount);
			System.out.println((BusinessAccount)session.getAttribute("businessUserSession"));
		return businessAccount.getBusinessUserId();
	}
	
	// 濡쒓렇�븘�썐
	@ResponseBody
	@RequestMapping(value="/api/v1/businessLogout", method=RequestMethod.GET)
	public void businessLogout() throws Exception {
		session.removeAttribute("businessUserSession");
		return;
	}
	
	// �쉶�썝 媛��엯
	@ResponseBody
	@RequestMapping(value="/api/v1/businessSignup", method=RequestMethod.POST)
	public BusinessAccount insertBusinessAccount(@RequestBody BusinessAccount businessAccount) throws Exception {
		System.out.println(businessAccount.getBusinessUserId());
		return shh.insertBusinessAccount(businessAccount);
	}

	// �븘�씠�뵒 李얘린
	@ResponseBody
	@RequestMapping(value="/api/v1/findingBusinessUserId/{name}/{email}", method=RequestMethod.POST)
	public String findUserId(@PathVariable String name, @PathVariable String email) throws Exception {
		String businessUserId = shh.findBusinessUserId(name, email);
		if (businessUserId == null)
			throw new Exception("userId not found");
		System.out.println(businessUserId);
		return businessUserId;
	}
	
	// �뙣�뒪�썙�뱶 李얘린
	@ResponseBody
	@RequestMapping(value="/api/v1/findingBusinessUserPw/{businessUserId}/{email}", method=RequestMethod.POST)
	public String findUserPw(@PathVariable String businessUserId,
			@PathVariable String email) throws Exception {
		BusinessAccount result = shh.findBusinessPw(businessUserId, email);
		if (result != null) {
			//email
			//...
			System.out.println(result.getEmail());
		} else {
			throw new Exception("userPw not found");
		}
		return email;
	}

	// �쉶�썝 �닔�젙 �젙蹂� 媛��졇�삤湲�
	@ResponseBody
	@RequestMapping(path="/api/v1/businessUser/{businessUserId}", method=RequestMethod.GET)
	public BusinessAccount getBusinessAccount(@PathVariable String businessUserId) throws Exception {
		return shh.getBusinessAccount(businessUserId);
	}
	
	// �쉶�썝 �닔�젙 submit
	@ResponseBody
	@RequestMapping(value="/api/v1/businessUser/{curPassword}", method=RequestMethod.PUT)
	public BusinessAccount updateBusinessAccount(@RequestBody BusinessAccount businessAccount, @PathVariable String curPassword) throws Exception {
		BusinessAccount result = null;

		System.out.println("cur:" + curPassword);
		
		BusinessAccount account = shh.getBusinessAccount(businessAccount.getBusinessUserId());
		if (account != null && account.getPassword().equals(curPassword)) {
			session.removeAttribute("businessUserSession");
			result = shh.updateBusinessAccount(account);
			System.out.println(result.getBusinessUserId());
			session.setAttribute("businessUserSession", result);
		} else {
			throw new Exception("update exception");
		}
		return result;
	}
	
	// �쉶�썝 �깉�눜
	@ResponseBody
	@RequestMapping(value="/api/v1/businessUser/{businessUserId}/{password}", method=RequestMethod.DELETE)
	public BusinessAccount removeBusinessAccount(@PathVariable String businessUserId, @PathVariable String password) throws Exception {
		BusinessAccount result = null;
		
		System.out.println(businessUserId);
		System.out.println(password);
		
		BusinessAccount businessAccount = shh.getBusinessAccount(businessUserId);
		if (businessAccount != null && businessAccount.getPassword().equals(password)) {
			session.removeAttribute("businessUserSession");
			result = shh.removeBusinessAccount(businessAccount);
			System.out.println(result.getBusinessUserId());
		} else {
			throw new Exception("remove exception");
		}
		return result;
	}

	
}
