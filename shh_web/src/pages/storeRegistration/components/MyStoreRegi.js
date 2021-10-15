/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../../components";

const MyStoreRegi = () => {
  const { store, storePost, storePut } = useStore();

  const [data, setData] = useState({
    // businessUserId: store ? ("") : (store.businessUserId),
    // name: store.name,
    // address1: store.address1,
    // address2: store.address2,
    // telephone: store.telephone,
    // store_image1: store.store_image1,
    // store_image2: store.store_image2,
    // store_image3: store.store_image3,
    // logo_image: store.logo_image,
    // introduce: store.introduce,
    // short_introduce: store.short_introduce,

    businessUserId: sessionStorage.sessionId,
    name: "",
    address1: "",
    address2: "",
    telephone: "",
    storeImage1: "",
    storeImage2: "",
    storeImage3: "",
    logoImage: "",
    introduce: "",
    shortIntroduce: "",
    mainCategoryId: "",
    subCategoryId: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const insertStore = async () => {
    await storePost({
      ...store,
      name: data.name,
      address1: data.address1,
      address2: data.address2,
      telephone: data.telephone,
      storeImage1: data.storeImage1,
      storeImage2: data.storeImage2,
      storeImage3: data.storeImage3,
      logoImage: data.logo_image,
      introduce: data.introduce,
      shortIntroduce: data.shortIntroduce,
      mainCategoryId: "",
      subCategoryId: "",
    });

    alert("등록이 완료되었습니다.");
    document.location.href = "/";
  };

  const updateStore = async () => {
    await storePut({
      ...store,
      name: data.name,
      address1: data.address1,
      address2: data.address2,
      telephone: data.telephone,
      storeImage1: data.storeImage1,
      storeImage2: data.storeImage2,
      storeImage3: data.storeImage3,
      logoImage: data.logo_image,
      introduce: data.introduce,
      shortIntroduce: data.shortIntroduce,
      mainCategoryId: "",
      subCategoryId: "",
    });
  };
  return (

  // store ? (
  //   <div>

  //     <div className="col-md-7 col-lg-8">
  //       <h4 className="mb-3">상점 수정</h4>
  //       <form className="needs-validation" noValidate>
  //         <div className="col-12">
  //           <label htmlFor="photo" className="form-label">로고사진</label> <p />
  //           <input type="file" name="FileName" value={store.logo_image} onChange={handleChange} />
  //         </div>
  //         <div className="col-12">
  //           <label htmlFor="photo" className="form-label">상점사진1</label> <p />
  //           <input type="file" name="FileName" value={store.store_image1} onChange={handleChange} />
  //         </div>
  //         <div className="col-12">
  //           <label htmlFor="photo" className="form-label">상점사진2</label> <p />
  //           <input type="file" name="FileName" onChange={handleChange} />
  //         </div>
  //         <div className="col-12">
  //           <label htmlFor="photo" className="form-label">상점사진3</label> <p />
  //           <input type="file" name="FileName" onChange={handleChange} />
  //         </div>
  //         <div className="row g-3">
  //           <div className="col-12">
  //             <label htmlFor="name" className="form-label">상호명</label>
  //             <input type="text" className="form-control" id="address" required onChange={handleChange} />
  //           </div>
  //           <div className="col-12">
  //             <label htmlFor="address" className="form-label">위치</label>
  //             <input type="text" className="form-control" id="address" required onChange={handleChange} />
  //           </div>
  //           <div className="col-12">
  //             <label htmlFor="address" className="form-label">위치</label>
  //             <input type="text" className="form-control" id="address" required onChange={handleChange} />
  //           </div>
  //           <div className="col-12">
  //             <label htmlFor="registrationNum" className="form-label">사업자 등록번호</label>
  //             <input type="text" className="form-control" id="address" required onChange={handleChange} />
  //           </div>
  //           <div className="col-12">
  //             <label htmlFor="phone" className="form-label">매장 전화번호</label>
  //             <input type="text" className="form-control" id="address" required onChange={handleChange} />
  //           </div>
  //           <div className="col-12">
  //             <label htmlFor="introduction" className="form-label">상점소개</label><p />
  //             <textarea className="form-control" name="introduction" onChange={handleChange} />
  //           </div>
  //           <div className="col-12">
  //             <label htmlFor="category" className="form-label">카테고리</label>
  //             <select className="form-select" id="country" required onChange={handleChange}>
  //               <option>식당</option>
  //               <option>카페</option>
  //               <option>놀거리</option>
  //             </select>
  //           </div>
  //           <div className="col-12">
  //             <label htmlFor="shortIntroduction" className="form-label">상점 한 줄 소개</label>
  //             <input type="text" className="form-control" id="address" required onChange={handleChange} />
  //           </div>

  //           <hr className="my-4" />

  //           <button className="w-100 btn btn-primary btn-lg" type="submit">등록</button>
  //         </div>
  //       </form>
  //     </div>

    //   </div>
    // ) : (
    <div className="mx-auto col-6">
      <h4 className="mb-3">상점 등록</h4>
      <form className="needs-validation" noValidate>
        <div className="col-6">
          <label htmlFor="photo" className="form-label">로고사진 </label>
          <input type="file" name="logoImage" onChange={handleChange} /><p />
        </div>
        <div className="col-6">
          <label htmlFor="photo" className="form-label">상점사진1 </label>
          <input type="file" name="storeImage1" onChange={handleChange} /><p />
          <label htmlFor="photo" className="form-label">상점사진2 </label>
          <input type="file" name="storeImage2" onChange={handleChange} /><p />
          <label htmlFor="photo" className="form-label">상점사진3 </label>
          <input type="file" name="storeImage3" onChange={handleChange} /><p />
        </div>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="name" className="form-label">상호명</label>
            <input type="text" className="form-control" name="name" required onChange={handleChange} />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">위치1</label>
            <input type="text" className="form-control" name="address1" required onChange={handleChange} />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">위치2</label>
            <input type="text" className="form-control" name="address2" required onChange={handleChange} />
          </div>
          <div className="col-12">
            <label htmlFor="registrationNum" className="form-label">회원 아이디</label>
            <input type="text" className="form-control" name="businessUserId" disabled value={sessionStorage.sessionId} />
          </div>
          <div className="col-12">
            <label htmlFor="phone" className="form-label">매장 전화번호</label>
            <input type="text" className="form-control" name="telephone" required onChange={handleChange} />
          </div>
          <div className="col-12">
            <label htmlFor="introduction" className="form-label">상점소개</label><p />
            <textarea className="form-control" name="introduction" onChange={handleChange} />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">메인 카테고리</label>
            <select className="form-select" name="mainCategoryId" required onChange={handleChange}>
              <option>메인 카테고리를 선택하세요</option>
              <option value="1">식당</option>
              <option value="2">카페</option>
              <option value="3">놀거리</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">서브 카테고리</label>
            <select className="form-select" name="subCategoryId" required onChange={handleChange}>
              <option>서브 카테고리를 선택하세요</option>
              <option>한식</option>
              <option>양식</option>
              <option>중식</option>
              <option>일식</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="shortIntroduction" className="form-label">상점 한 줄 소개</label>
            <input type="text" className="form-control" name="shortIntroduce" required onChange={handleChange} />
          </div>

          <hr className="my-4" />
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn btn-primary" onClick={insertStore}>등록</Link>

        </div>
      </form>
    </div>
    // )

  );
};
export default MyStoreRegi;
