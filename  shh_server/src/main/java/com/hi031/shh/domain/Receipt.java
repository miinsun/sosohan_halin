package com.hi031.shh.domain;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@SuppressWarnings("serial")
@Entity
@Table(name="receipt", uniqueConstraints={
		@UniqueConstraint(
				columnNames={"consumer_user_id", "store_id", "receipt_date"}
			)
		})
@Getter
@Setter
public class Receipt implements Serializable {
   @Id
   @Column(name="receipt_id")
   @GeneratedValue(strategy=GenerationType.IDENTITY)
   private int receiptId;
   
   @Column(name="receipt_date")
   @DateTimeFormat(pattern = "yyyy-MM-dd")
   private LocalDate receiptDate;
   
   @ManyToOne(cascade = {}, targetEntity = Store.class, fetch = FetchType.LAZY)
   @JoinColumn(name="store_id", insertable = false, updatable = false)
   @JsonIgnore
   private Store store;

   @Column(name="store_id")
   private int storeId;
  
   @ManyToOne(cascade = {}, targetEntity = ConsumerAccount.class, fetch = FetchType.LAZY)
   @JoinColumn(name="consumer_user_id", insertable = false, updatable = false)
   @JsonIgnore
   private ConsumerAccount consumerAccount;
   
   @Column(name="consumer_user_id")
   private String consumerUserId;
   
   public Receipt() {
	   
   }
   
   public Receipt(LocalDate receiptDate, int storeId, String consumerUserId) {
	   this.receiptDate = receiptDate;
	   this.storeId = storeId;
	   this.consumerUserId = consumerUserId;
   }

	public int getReceiptId() {
		return receiptId;
	}
	
	public void setReceiptId(int receiptId) {
		this.receiptId = receiptId;
	}
	
	public LocalDate getReceiptDate() {
		return receiptDate;
	}
	
	public void setReceiptDate(LocalDate receiptDate) {
		this.receiptDate = receiptDate;
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
	
	public ConsumerAccount getConsumerAccount() {
		return consumerAccount;
	}
	
	public void setConsumerAccount(ConsumerAccount consumerAccount) {
		this.consumerAccount = consumerAccount;
	}
	
	public String getConsumerUserId() {
		return consumerUserId;
	}
	
	public void setConsumerUserId(String consumerUserId) {
		this.consumerUserId = consumerUserId;
	}
   
}