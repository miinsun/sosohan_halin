package com.hi031.shh.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.hi031.shh.domain.ConsumerCoupon;

public interface ConsumerCouponRepository extends PagingAndSortingRepository<ConsumerCoupon, Integer>{
	List<ConsumerCoupon> findByConsumer_ConsumerUserIdAndStateOrderByDownloadDate(int consumerUserId, int state) throws DataAccessException; //諛쒓툒�닚 �젙�젹
	
//	@Query("select c from ConsumerCoupon c " + 
//			"where c.consumer.consumerUserId = ?1 order by c.finishDate desc")
//	List<ConsumerCoupon> findByConsumerUserIdOrderByCoupon_FinishDate(int consumerUserId) throws DataAccessException; //留덇컧�엫諛뺤닚 �젙�젹

	List<ConsumerCoupon> findByConsumer_ConsumerUserIdAndStateNot(int consumerUserId, int state) throws DataAccessException; //만료 쿠폰
	Iterable<ConsumerCoupon> findAllByConsumerUserIdAndStateIs(String consumerUserId, int state, Sort sort) throws DataAccessException; //가용 가능 쿠폰

	@Query(value =
	        "SELECT "+
	            " c. AS year " +
	            ", SUM(rp.loan_small) AS smallSum " +
	            ", SUM(rp.loan_major) AS majorSum " +
	            ", SUM(rp.loan_total) AS totalSum " +
	            "FROM consumer_coupon c " +
	            "GROUP BY rp.year"
	        , nativeQuery = true
	    )
	List<ConsumerCoupon> GroupByConsumer_ConsumerUserIdAndStateIs(int consumerUserId, int state) throws DataAccessException; //날짜별 쿠폰 사용내역
}
