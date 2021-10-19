package com.hi031.shh.mapper;

import com.hi031.shh.domain.Store;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
@Mapper
public interface StoreMapper {

	@Select("SELECT * FROM (SELECT a.*, ROWNUM AS rnum FROM (SELECT store_id, business_user_id, main_category_id, sub_category_id, name, address1, address2, telephone, store_image1, store_image2, store_image3, logo_image, introduce, short_introduce"
			+ " FROM STORE s"
			+ " WHERE name LIKE '%' ||  #{keyword} || '%'"
			+ " ORDER BY i.price) a"
			+ " WHERE ROWNUM <= #{end})"
			+ " WHERE rnum >= #{start}")
	List<Store> getStoresByName(String keyword, int start, int end);
	
	@Select("SELECT * FROM (SELECT a.*, ROWNUM AS rnum FROM (SELECT store_id, business_user_id, main_category_id, sub_category_id, name, address1, address2, telephone, store_image1, store_image2, store_image3, logo_image, introduce, short_introduce"
			+ " FROM STORE s, MAINCATEGORY c"
			+ " WHERE s.main_category_id = c.main_category_id AND c.name LIKE '%' ||  #{keyword} || '%'"
			+ " ORDER BY i.price) a"
			+ " WHERE ROWNUM <= #{end})"
			+ " WHERE rnum >= #{start}")
	List<Store> getStoresByMainCategory(String keyword, int start, int end);
	
	@Select("SELECT * FROM (SELECT a.*, ROWNUM AS rnum FROM (SELECT store_id, business_user_id, main_category_id, sub_category_id, name, address1, address2, telephone, store_image1, store_image2, store_image3, logo_image, introduce, short_introduce"
			+ " FROM STORE s, SUBCATEGORY c"
			+ " WHERE s.sub_category_id = c.sub_category_id AND c.name LIKE '%' ||  #{keyword} || '%'"
			+ " ORDER BY i.price) a"
			+ " WHERE ROWNUM <= #{end})"
			+ " WHERE rnum >= #{start}")
	List<Store> getStoresBySubCategory(String keyword, int start, int end);
	
	@Select("SELECT * FROM (SELECT a.*, ROWNUM AS rnum FROM (SELECT store_id, business_user_id, main_category_id, sub_category_id, name, address1, address2, telephone, store_image1, store_image2, store_image3, logo_image, introduce, short_introduce"
			+ " FROM STORE s"
			+ " WHERE address1 LIKE '%' ||  #{keyword} || '%'"
			+ " ORDER BY i.price) a"
			+ " WHERE ROWNUM <= #{end})"
			+ " WHERE rnum >= #{start}")
	List<Store> getStoresByLocation(String keyword, int start, int end);
}
