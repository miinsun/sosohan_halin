package com.hi031.shh.domain;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@SuppressWarnings("serial")
@Entity
@Table(name="store")
public class Store implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="store_id")
	private int storeId;
	
	@ManyToOne
	@JoinColumn(name="business_user_id", insertable = false, updatable = false)
	private BusinessAccount businessUser;
	
	@Column(name="business_user_id")
	private String businessUserId;
	
	@Column(name="main_category_id")
	private int mainCategoryId;
	
	@Column(name="sub_category_id")
	private int subCategoryId;
	
	private String name;
	private String address1;
	private String address2;
	private String telephone;
	
	@Column(name="store_image1")
	private String storeImage1;
	@Column(name="store_image2")
	private String storeImage2;
	@Column(name="store_image3")
	private String storeImage3;
	@Column(name="logo_image")
	private String logoImage;
	private String introduce;
	
	@Column(name="short_introduce")
	private String shortIntroduce;
	
	public Store() {
	}
	
	public Store( String name) {
		this.name = name;
	}

	public Store(int storeId, BusinessAccount businessUser, String businessUserId, int mainCategoryId,
			int subCategoryId, String name, String address1, String address2, String telephone, String storeImage1,
			String store_image2, String store_image3, String logo_image, String introduce, String shortIntroduce) {
		this.storeId = storeId;
		this.businessUser = businessUser;
		this.businessUserId = businessUserId;
		this.mainCategoryId = mainCategoryId;
		this.subCategoryId = subCategoryId;
		this.name = name;
		this.address1 = address1;
		this.address2 = address2;
		this.telephone = telephone;
		this.storeImage1 = storeImage1;
		this.storeImage2 = store_image2;
		this.storeImage3 = store_image3;
		this.logoImage = logo_image;
		this.introduce = introduce;
		this.shortIntroduce = shortIntroduce;
	}
	
	public int getStoreId() {
		return storeId;
	}
	public void setStoreId(int storId) {
		this.storeId = storId;
	}
	public String getBusinessUserId() {
		return businessUserId;
	}
	public void setBusinessUserId(String businessUserId) {
		this.businessUserId = businessUserId;
	}
	public int getMainCategoryId() {
		return mainCategoryId;
	}
	public void setMainCategoryId(int mainCategoryId) {
		this.mainCategoryId = mainCategoryId;
	}
	public int getSubCategoryId() {
		return subCategoryId;
	}
	public void setSubCategoryId(int subCategoryId) {
		this.subCategoryId = subCategoryId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getStoreImage1() {
		return storeImage1;
	}
	public void setStoreImage1(String storeImage1) {
		this.storeImage1 = storeImage1;
	}
	public String getStoreImage2() {
		return storeImage2;
	}
	public void setStoreImage2(String storeImage2) {
		this.storeImage2 = storeImage2;
	}
	public String getStoreImage3() {
		return storeImage3;
	}
	public void setStoreImage3(String storeImage3) {
		this.storeImage3 = storeImage3;
	}
	public String getLogoImage() {
		return logoImage;
	}
	public void setLogoImage(String logoImage) {
		this.logoImage = logoImage;
	}
	public String getIntroduce() {
		return introduce;
	}
	public void setIntroduce(String introduce) {
		this.introduce = introduce;
	}
	public String getShortIntroduce() {
		return shortIntroduce;
	}
	public void setShortIntroduce(String shortIntroduce) {
		this.shortIntroduce = shortIntroduce;
	}
	
	
}
