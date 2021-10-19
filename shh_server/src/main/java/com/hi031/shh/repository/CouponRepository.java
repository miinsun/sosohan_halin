package com.hi031.shh.repository;

import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.hi031.shh.domain.Coupon;

public interface CouponRepository extends PagingAndSortingRepository<Coupon, Integer>{
	List<Coupon> findByStore_StoreIdAndAvailableIs(int storeId, boolean available) throws DataAccessException;
}
