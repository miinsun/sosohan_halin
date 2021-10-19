package com.hi031.shh.domain;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@SuppressWarnings("serial")
@Entity
@Table(name = "consumer_coupon")
@Getter
@Setter
public class ConsumerCoupon implements Serializable {

	private int consumerCouponId;

	private ConsumerAccount consumer;

	private String consumerUserId;

	private Coupon coupon;

	private int couponId;

	private int receiptId;

	private LocalDateTime downloadDate;

	private LocalDateTime finishDate;

	private LocalDateTime useDate;

	private int state; // 1:사용 가능, 0:사용완료, -1:기한 만료

	private int remainingDay;

	public ConsumerCoupon() {
		super();
	}

	@Id
	@Column(name = "consumer_coupon_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getConsumerCouponId() {
		return consumerCouponId;
	}

	public void setConsumerCouponId(int consumerCouponId) {
		this.consumerCouponId = consumerCouponId;
	}

	@ManyToOne(cascade = {}, targetEntity = ConsumerAccount.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "consumer_user_id", insertable = false, updatable = false)
	@JsonIgnore
	public ConsumerAccount getConsumer() {
		return consumer;
	}

	public void setConsumer(ConsumerAccount consumer) {
		this.consumer = consumer;
	}

	@Column(name = "consumer_user_id")
	public String getConsumerUserId() {
		return consumerUserId;
	}

	public void setConsumerUserId(String consumerUserId) {
		this.consumerUserId = consumerUserId;
	}

	@ManyToOne(cascade = {})
	@JoinColumn(name = "coupon_id", insertable = false, updatable = false)
	public Coupon getCoupon() {
		return coupon;
	}

	public void setCoupon(Coupon coupon) {
		this.coupon = coupon;
	}

	@Column(name = "coupon_id")
	public int getCouponId() {
		return couponId;
	}

	public void setCouponId(int couponId) {
		this.couponId = couponId;
	}

	@Column(name = "download_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
	public LocalDateTime getDownloadDate() {
		return downloadDate;
	}

	public void setDownloadDate(LocalDateTime downloadDate) {
		this.downloadDate = downloadDate;
	}

	@Column(name = "finish_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
	public LocalDateTime getFinishDate() {
		return finishDate;
	}

	public void setFinishDate(LocalDateTime finishDate) {
		this.finishDate = finishDate;
	}

	@Column(name = "use_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Seoul")
	public LocalDateTime getUseDate() {
		return useDate;
	}

	public void setUseDate(LocalDateTime useDate) {
		this.useDate = useDate;
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}
	
	@Column(name = "receipt_id")
	public int getReceiptId() {
		return receiptId;
	}

	public void setReceiptId(int receiptId) {
		this.receiptId = receiptId;
	}

	@Transient
	public int getRemainingDay() {
		Period period = Period.between(LocalDate.now(), finishDate.toLocalDate());

		return period.getDays();
	}
	
	public void setRemainingDay(int remainingDay) {
		this.remainingDay = remainingDay;
	}

}