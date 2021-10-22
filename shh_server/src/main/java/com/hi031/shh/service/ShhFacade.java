package com.hi031.shh.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.hi031.shh.domain.BusinessAccount;
import com.hi031.shh.domain.ConsumerAccount;
import com.hi031.shh.domain.ConsumerCoupon;
import com.hi031.shh.domain.Coupon;
import com.hi031.shh.domain.Link;
import com.hi031.shh.domain.Receipt;
import com.hi031.shh.domain.ReceiptWrapper;
import com.hi031.shh.domain.Store;

public interface ShhFacade {
	BusinessAccount getAccount(String businessUserId, String password);
	BusinessAccount insertBusinessAccount(BusinessAccount businessAccount);
	String findBusinessUserId(String name, String email);
	BusinessAccount findBusinessPw(String businessUserId, String email);
	BusinessAccount getBusinessAccount(String businessUserId);
	BusinessAccount updateBusinessAccount(BusinessAccount businessAccount);
	BusinessAccount removeBusinessAccount(BusinessAccount businessAccount);
	boolean isBusinessUserIdExisting(String businessUserId);

	ConsumerAccount consumerLogin(String consumerUserId, String password);
	ConsumerAccount insertConsumerAccount(ConsumerAccount consumerAccount);
	String findConsumerUserId(String name, String email);
	ConsumerAccount findConsumerPw(String consumerUserId, String email);
	ConsumerAccount getConsumerAccount(String consumerUserId);
	ConsumerAccount updateConsumerAccount(ConsumerAccount consumerAccount);
	ConsumerAccount removeConsumerAccount(ConsumerAccount consumerAccount);
	
	Coupon insertCoupon(Coupon coupon);
	Coupon updateCoupon(Coupon coupon);
	void removeCoupon(Coupon coupon);
	Coupon getCoupon(int couponId);	
	List<Coupon> getCoupons(int storeId);

	ConsumerCoupon getConsumerCoupon(int consumerCouponId);
	List<ConsumerCoupon> getConsumerCoupons(String consumerUserId, boolean isAvailable);
//	ConsumerCoupon insertConsumerCoupon(Receipt receipt, int couponId);
  	ConsumerCoupon insertConsumerCoupon(ConsumerCoupon coupon, LocalDate receiptDate, int store, String consumerUserId);
	ConsumerCoupon updateConsumerCoupon(ConsumerCoupon coupon);
	
	Link insertLink(Link link);
	Link updateLink(Link link, int state, int management);
	Link getLink(String proposerId, String receiverId);
	Link getLinkByLinkId(String linkId);
	List<Link> getLinks(String storeId, int state, int managemnet);
	long countByProposerId(String proposerId);
	List<Link> getLinksByReceiverId(String receiverId);
	List<Link> getLinksByProposerId(String proposerId);
	void removeLink(Link link);
	List<Link> getLinkAlarm(int isWatched, String storeId);
	Store insertStore(Store store);
	Store updateStore(Store store);
	void removeStore(Store store);
	Store getStore(int storeId);
	Store getStoreByNameAndNum(String name, String num);
	List<Store> getMyStores(String businessUserId);
	List<Store> getAllStores();
	List<Store> getStoresByName(int type, String keyword, int start, int end);
	List<Store> getStoresByMainCategory(int type, String keyword, int start, int end);
	List<Store> getStoresBySubCategory(int type, String keyword, int start, int end);
	List<Store> getStoresByLocation(int type, String keyword, int start, int end);
	long getMyStoreCount(String businessUserId);
	long getAllStoreCount();
	
	ReceiptWrapper isinReceipt(String storeName, String businessNum, String consumerUserId, LocalDate reiceptDate);
}