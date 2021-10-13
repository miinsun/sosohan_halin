/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react";

export class MyStoreRegi extends Component {
  render() {
    return (
      <div>

        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">상점 등록</h4>
          <form className="needs-validation" noValidate>
            <div className="col-12">
              <label htmlFor="photo" className="form-label">대표사진</label> <p />
              <input type="file" name="FileName" />
            </div>
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="name" className="form-label">상호명</label>
                <input type="text" className="form-control" id="address" required />
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">위치</label>
                <input type="text" className="form-control" id="address" required />
              </div>
              <div className="col-12">
                <label htmlFor="registrationNum" className="form-label">사업자 등록번호</label>
                <input type="text" className="form-control" id="address" required />
              </div>
              <div className="col-12">
                <label htmlFor="representative" className="form-label">대표자</label>
                <input type="text" className="form-control" id="address" required />
              </div>
              <div className="col-12">
                <label htmlFor="phone" className="form-label">매장 전화번호</label>
                <input type="text" className="form-control" id="address" required />
              </div>
              <div className="col-12">
                <label htmlFor="introduction" className="form-label">상점소개</label><p />
                <textarea className="form-control" name="introduction" />
              </div>
              <div className="col-12">
                <label htmlFor="category" className="form-label">카테고리</label>
                <select className="form-select" id="country" required>
                  <option>식당</option>
                  <option>카페</option>
                  <option>놀거리</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="shortIntroduction" className="form-label">상점 한 줄 소개</label>
                <input type="text" className="form-control" id="address" required />
              </div>
              <div className="col-12">
                <label htmlFor="website" className="form-label">웹 사이트 주소</label>
                <input type="text" className="form-control" id="address" required />
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">등록</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default MyStoreRegi;
