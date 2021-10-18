package com.hi031.shh.domain;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@SuppressWarnings("serial")
@Entity
@Table(name="coupon")
@Getter
@Setter
public class Coupon implements Serializable {
	@Id
	@Column(name="coupon_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int couponId;
	
//	@ManyToOne(cascade = {}, targetEntity = Store.class, fetch = FetchType.LAZY)
//	@JoinColumn(name="store_id", insertable = false, updatable = false)
//	@JsonIgnore
	@ManyToOne(cascade = {})
	@JoinColumn(name="store_id", insertable = false, updatable = false)
	private Store store; 	//store.name, logoImage 사용해야 함
	
	@Column(name = "store_id")
	private int storeId;

	private String name;
	
	private String description;
	
	private Integer validity;
	
	@Column(name="is_available")
	private boolean available;
	
	@Column(name="start_date")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone="Asia/Seoul")
	private LocalDate startDate;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone="Asia/Seoul")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Transient
	private LocalDate finishDate;
	
	@Column(name="finish_date")
	@JsonIgnore
	private LocalDateTime finishDateForDb;
	
	public Coupon() {
		super();
	}

	public int getCouponId() {
		return couponId;
	}

	public void setCouponId(int couponId) {
		this.couponId = couponId;
	}

	public Store getStore() {
		return store;
	}

	public void setStore(Store store) {
		this.store = store;
	}

	public int getStoreId() {
		return storeId;
	}

	public void setStoreId(int storeId) {
		this.storeId = storeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getValidity() {
		return validity;
	}

	public void setValidity(Integer validity) {
		this.validity = validity;
	}

	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getFinishDate() {
		if (finishDateForDb == null) {
			return this.finishDate;
		} else {
			return finishDateForDb.toLocalDate();
		}
	}

	public void setFinishDate(LocalDate finishDate) {
		this.finishDate = finishDate;
	}

	public LocalDateTime getFinishDateForDb() {
		return finishDateForDb;
	}
	
	public void setFinishDateForDb(LocalDateTime finishDateForDb) {
		this.finishDateForDb = finishDateForDb;
	}

	
}
