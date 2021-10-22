package com.hi031.shh.service;

import javax.servlet.http.HttpSession;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;

import com.hi031.shh.domain.BusinessAccount;
import com.hi031.shh.domain.ConsumerAccount;
import com.hi031.shh.domain.ConsumerCoupon;
import com.hi031.shh.domain.Coupon;
import com.hi031.shh.domain.Link;
import com.hi031.shh.domain.Receipt;
import com.hi031.shh.domain.ReceiptWrapper;
import com.hi031.shh.domain.RequestWrapper;
import com.hi031.shh.repository.CouponRepository;
import com.hi031.shh.repository.LinkRepository;
import com.hi031.shh.repository.ReceiptRepository;
import com.hi031.shh.repository.BusinessAccountRepository;
import com.hi031.shh.repository.ConsumerAccountRepository;
import com.hi031.shh.repository.ConsumerCouponRepository;
import com.hi031.shh.domain.Store;
import com.hi031.shh.mapper.StoreMapper;
import com.hi031.shh.repository.CouponRepository;
import com.hi031.shh.repository.StoreRepository;

@Service
public class ShhImpl implements ShhFacade {
	@Autowired
	private HttpSession session;
	
	@Autowired
	private BusinessAccountRepository businessAccountRepo;
	
	@Autowired
	private ConsumerAccountRepository consumerAccountRepo;
	
	@Autowired
	private CouponRepository couponRepo;
	
	@Autowired
	private ConsumerCouponRepository consumerCouponRepo;
	
	@Autowired
	private StoreRepository storeRepo;
	//private StoreMapper storeMapper;

	@Autowired
	private LinkRepository linkRepo;
	
	@Autowired
	private ReceiptRepository receiptRepo;
	
	@Override
	public BusinessAccount getAccount(String businessUserId, String password) {
		Optional<BusinessAccount> result = businessAccountRepo.findByBusinessUserIdAndPassword(businessUserId, password);
		
		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public BusinessAccount insertBusinessAccount(BusinessAccount businessAccount) {
		return businessAccountRepo.save(businessAccount);
	}

	@Override
	public String findBusinessUserId(String name, String email) {
		Optional<BusinessAccount> result = businessAccountRepo.findByNameAndEmail(name, email);

		if (result.isPresent()) {
			return result.get().getBusinessUserId();
		} else {
			return null;
		}
	}

	@Override
	public BusinessAccount findBusinessPw(String businessUserId, String email) {
		Optional<BusinessAccount> result = businessAccountRepo.findByBusinessUserIdAndEmail(businessUserId, email);

		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public BusinessAccount getBusinessAccount(String businessUserId) {
		Optional<BusinessAccount> result = businessAccountRepo.findByBusinessUserId(businessUserId);
		
		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public BusinessAccount updateBusinessAccount(BusinessAccount businessAccount) {
		return businessAccountRepo.save(businessAccount);
	}

	@Override
	public BusinessAccount removeBusinessAccount(BusinessAccount businessAccount) {
		businessAccount.setState(2);

		return businessAccountRepo.save(businessAccount);
	}
	
	@Override
	public boolean isBusinessUserIdExisting(String businessUserId) {
		return businessAccountRepo.existsById(businessUserId);
	}

	
	@Override
	public ConsumerAccount consumerLogin(String consumerUserId, String password) {
		Optional<ConsumerAccount> result = consumerAccountRepo.findByConsumerUserIdAndPassword(consumerUserId, password);
		
		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public ConsumerAccount insertConsumerAccount(ConsumerAccount consumerAccount) {
		return consumerAccountRepo.save(consumerAccount);
	}

	@Override
	public String findConsumerUserId(String name, String email) {
		Optional<ConsumerAccount> result = consumerAccountRepo.findByNameAndEmail(name, email);

		if (result.isPresent()) {
			return result.get().getConsumerUserId();
		} else {
			return null;
		}
	}

	@Override
	public ConsumerAccount findConsumerPw(String consumerUserId, String email) {
		Optional<ConsumerAccount> result = consumerAccountRepo.findByConsumerUserIdAndEmail(consumerUserId, email);

		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public ConsumerAccount getConsumerAccount(String consumerUserId) {
		Optional<ConsumerAccount> result = consumerAccountRepo.findByConsumerUserId(consumerUserId);	
		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}


	
	@Override
	public ConsumerAccount updateConsumerAccount(ConsumerAccount consumerAccount) {
		return consumerAccountRepo.save(consumerAccount);
	}

	@Override
	public ConsumerAccount removeConsumerAccount(ConsumerAccount consumerAccount) {
		consumerAccount.setIsAvailable(2);
		
		return consumerAccountRepo.save(consumerAccount);
	}
	
	@Override
	public Coupon insertCoupon(Coupon coupon) {
		coupon.setFinishDateForDb(coupon.getFinishDate().atStartOfDay().plusHours(23).plusMinutes(59).plusSeconds(59));
		Coupon newCoupon = couponRepo.save(coupon);
		return newCoupon;
	}

	@Override
	public Coupon updateCoupon(Coupon coupon) {
		coupon.setFinishDateForDb(coupon.getFinishDate().atStartOfDay().plusHours(23).plusMinutes(59).plusSeconds(59));
		Coupon updateCoupon = couponRepo.save(coupon);
		return updateCoupon;
	}

	@Override
	public void removeCoupon(Coupon coupon) {
		coupon.setAvailable(false);
		couponRepo.save(coupon);
	}

	@Override
	public Coupon getCoupon(int couponId) {
		Optional<Coupon> result = couponRepo.findById(couponId);
		
		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public List<Coupon> getCoupons(int storeId) {
		return couponRepo.findByStore_StoreIdAndAvailableIs(storeId, true);
	}

	@Override
	public Link insertLink(Link link) {
		return linkRepo.save(link);
	}
	
	@Override
	public Link updateLink(Link link, int state, int management) {
		link.setState(state);
		link.setManagement(management);
		
		return linkRepo.save(link);
	}

	public void removeLink(Link linkId) {
		linkRepo.delete(linkId);
	}
	
  public Store insertStore(Store store) {
	  System.out.println(store.getBusinessUserId() + " " + store.getMainCategoryId() + " �쾾");
		Store newStore = storeRepo.save(store);
		return newStore;
	}

	@Override
	public Store updateStore(Store store) {
		Store updateStore = storeRepo.save(store);
		return updateStore;
	}

	@Override
	public void removeStore(Store store) {
		storeRepo.delete(store);
	}

	@Override
	public Store getStore(int storeId) {
		Optional<Store> result = storeRepo.findById(storeId);
		
		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	@Override
	public List<Store> getMyStores(String businessUserId) {
		return storeRepo.findByBusinessUserId(businessUserId);
	}

	@Override
	public List<Store> getAllStores() {
		return (List<Store>) storeRepo.findAll();
	}

//	@Override
//	public List<Store> getStoresByName(int type, String keyword, int start, int end) {
		//return storeMapper.getStoresByName(keyword, start, end);
	//}

//	@Override
//	public List<Store> getStoresByMainCategory(int type, String keyword, int start, int end) {
//		return storeMapper.getStoresByMainCategory(keyword, start, end);
//	}
//
//	@Override
//	public List<Store> getStoresBySubCategory(int type, String keyword, int start, int end) {
//		return storeMapper.getStoresBySubCategory(keyword, start, end);
//	}
//
//	@Override
//	public List<Store> getStoresByLocation(int type, String keyword, int start, int end) {
//		return storeMapper.getStoresByLocation(keyword, start, end);
//	}

	@Override
	public long getMyStoreCount(String businessUserId) {
		return storeRepo.countByBusinessUserId(businessUserId);
	}
	
	@Override
	public long getAllStoreCount() {
		return storeRepo.count();
	}
	
	@Override
	public List<Link> getLinks(String storeId, int state, int managemnet) {
		List<Link> list = linkRepo.findLinkByProposerIdAndStateAndManagement(storeId, state, managemnet);
		list.addAll(linkRepo.findLinkByReceiverIdAndStateAndManagement(storeId, state, managemnet));
		
		return list;
	}
	
	@Override
	public List<Link> getLinksByReceiverId(String receiverId) {
		return (List<Link>) linkRepo.findByReceiverId(receiverId);
	}
	
	@Override
	public List<Link> getLinksByProposerId(String proposerId) {
		return (List<Link>) linkRepo.findByProposerId(proposerId);
	}
	
	@Override
	public Link getLink(String proposerId, String receiverId) {
		return linkRepo.findByProposerIdAndReceiverId(proposerId, receiverId);
	}
	
	@Override
	public Link getLinkByLinkId(String linkId) {
		return linkRepo.findByLinkId(linkId);
	}
	
	@Override
	public long countByProposerId(String proposerId) {
		return linkRepo.countByProposerId(proposerId);
	}

	@Override
	public List<Store> getStoresByName(int type, String keyword, int start, int end) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Store> getStoresByMainCategory(int type, String keyword, int start, int end) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Store> getStoresBySubCategory(int type, String keyword, int start, int end) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Store> getStoresByLocation(int type, String keyword, int start, int end) {
		// TODO Auto-generated method stub
		return null;
	}
	
//	@Transactional
//	@Override
//	public ConsumerCoupon insertConsumerCoupon(Receipt receipt, int couponId) {
//		Coupon coupon = getCoupon(couponId);
//		
////		Receipt receipt = new Receipt("2021-10-10", 2, "hy");
//		
////		ConsumerAccount consumerAccount = (ConsumerAccount) session.getAttribute("userSession");
////		ConsumerAccount consumerAccount = getConsumerAccount("hy");
//
//		Receipt result1 = receiptRepo.save(receipt);
//		
////		String consumerUserId = ((ConsumerAccount) session.getAttribute("consumerUserSession")).getConsumerUserId();
//		String consumerUserId = "hy";
//		
//		// �궇吏� 怨꾩궛 format	
//		SimpleDateFormat format1 = new SimpleDateFormat ("yyyy-MM-dd");
//		SimpleDateFormat format2 = new SimpleDateFormat ("yyyy-MM-dd HH:mm:ss");	
//		// �떎�슫濡쒕뱶 �떆媛�
//		LocalDateTime downloadDate = LocalDateTime.now();
////		
////		Date date = new Date();
////		String downloadDate = format2.format(date);
//		
//		// 留덇컧 �궇吏�(�떆媛�)
////		String finishDate = "";
//		LocalDate finishDate;
//		Integer validity = coupon.getValidity();
//		if (validity == null) {
//			finishDate = coupon.getFinishDate();
//		} else {
//			Calendar cal = Calendar.getInstance();
//			Date dlDate = null;
//			try {
//				dlDate = format2.parse(downloadDate);
//			} catch (ParseException e) {
//				e.printStackTrace();
//			}
//			cal.setTime(dlDate);
//			cal.add(Calendar.DATE, validity);
//			cal.set(Calendar.HOUR_OF_DAY, 23);
//			cal.set(Calendar.MINUTE, 59);
//			cal.set(Calendar.SECOND, 59);
//
////			finishDate = format2.format(cal.getTime());
//			finishDate = cal.getTime();
//			System.out.println("cal 寃곌낵:" + finishDate);
//			
//		}
//
//		ConsumerCoupon consumerCoupon = new ConsumerCoupon(consumerUserId, couponId, result1.getReceiptId(), downloadDate, finishDate);
//		System.out.println("shhimpl.insertConsumerCoupon(): " + consumerCoupon.getConsumerUserId());
//		ConsumerCoupon result2 = consumerCouponRepo.save(consumerCoupon);
//		
//		return result2;
//	}
	
	
	@Transactional
	@Override
	public ConsumerCoupon insertConsumerCoupon(ConsumerCoupon consumerCoupon, LocalDate receiptDate, int storeId, String consumerUserId) {
		// Receipt save
		Receipt receipt = new Receipt(receiptDate, storeId, consumerUserId);
		Receipt receiptResult = receiptRepo.save(receipt);
		int receiptId = receiptResult.getReceiptId();

		// consumerCoupon setting
		consumerCoupon.setReceiptId(receiptId);
		
		LocalDateTime downloadDate = LocalDateTime.now();
		consumerCoupon.setDownloadDate(downloadDate);

		Optional<Coupon> couponResult = couponRepo.findById(consumerCoupon.getCouponId());
		Coupon coupon = couponResult.get();
		Integer validity = coupon.getValidity();
		LocalDateTime finishDate = null;
		if (validity == null) {
			finishDate = coupon.getFinishDate().atStartOfDay();
		} else {
			finishDate = downloadDate.with(LocalTime.MIN).plusDays(validity).plusHours(23).plusMinutes(59).plusSeconds(59);			
		}
		System.out.println("finishDate:" + finishDate);
		consumerCoupon.setFinishDate(finishDate);
		
		ConsumerCoupon conCouponResult = consumerCouponRepo.save(consumerCoupon);
		return conCouponResult;
	}

	@Override
	@Transactional
	public ConsumerCoupon updateConsumerCoupon(ConsumerCoupon coupon) {
		coupon.setState(0);
		coupon.setUseDate(LocalDateTime.now());
		return consumerCouponRepo.save(coupon);
	}
	
	@Override
	public List<ConsumerCoupon> getConsumerCoupons(String consumerUserId, boolean isAvailable) {
		List<Order> orders = new ArrayList<Order>();

		Order order1 = new Order(Sort.Direction.DESC, "downloadDate");
		orders.add(order1);
		
		List<ConsumerCoupon> result = new ArrayList<>();
		if (isAvailable) {
			result = (List<ConsumerCoupon>) consumerCouponRepo.findAllByConsumerUserIdAndStateIs(consumerUserId, 1, Sort.by(orders));
		} else {
			result = (List<ConsumerCoupon>) consumerCouponRepo.findAllByConsumerUserIdAndStateNot(consumerUserId, 1, Sort.by(orders));
		}
		return result;
	}


	@Override
	public ConsumerCoupon getConsumerCoupon(int consumerCouponId) {
		Optional<ConsumerCoupon> result = consumerCouponRepo.findById(consumerCouponId);
		
		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

	public List<Link> getLinkAlarm(int isWatched, String storeId) {
		List<Link> list = linkRepo.findTop7ByIsWatchedAndReceiverIdOrderByProposalDateDesc(isWatched, storeId);
		return list;
	}

	@Override
	public ReceiptWrapper isinReceipt(String storeName, String businessNum, String consumerUserId, LocalDate receiptDate) {
		Optional<Store> storeResult = storeRepo.findByBusinessUser_BusinessNumAndName(businessNum, storeName);
	      if (storeResult.isPresent()) {
	    	  Store store = storeResult.get();
	    	  boolean existReceipt = receiptRepo.existsByStoreIdAndConsumerUserIdAndReceiptDate(store.getStoreId(), consumerUserId, receiptDate);
	    	  
	         return new ReceiptWrapper(existReceipt, store);
	      } else {
	    	  Store store = new Store(null);
	    	  return new ReceiptWrapper(false, store);
	   }
	}
	
	public Store getStoreByNameAndNum(String name, String num) {
		Optional<Store> result = storeRepo.findByBusinessUser_BusinessNumAndName(num, name);
		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}

}
