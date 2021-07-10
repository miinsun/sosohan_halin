import React from "react";

const MyPageSidebar = () => (
  <div className="MyPageSidebar">
    <div className="flex-shrink-0 p-3 bg-white" style={{ width: 280 }}>
      <ul className="list-unstyled ps-0">
        <li className="mb-1">
          {/* eslint-disable-next-line max-len */}
          <button className="btn btn-toggle align-items-center rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            회원 정보 관리
          </button>
          <div className="collapse show" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="link-dark rounded">회원정보 수정</a></li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li><a href="#" className="link-dark rounded">회원 탈퇴</a></li>
            </ul>
          </div>
        </li>
        <li className="mb-1">
          {/* eslint-disable-next-line max-len */}
          <button className="btn btn-toggle align-items-center rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            내 상점 관리
          </button>
        </li>
        <li className="mb-1">
          {/* eslint-disable-next-line max-len */}
          <button className="btn btn-toggle align-items-center rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            알림 설정
          </button>
        </li>
      </ul>
    </div>

  </div>

);

export default MyPageSidebar;
