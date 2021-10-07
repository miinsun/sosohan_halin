import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../components";

const EditAccountForm = () => {
  const { user, userPut } = useUser();

  const [data, setData] = useState({
    email: `${user.email}`,
    curPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const updateUser = async () => {
    try {
      console.log(data);

      setData({
        ...data,
      });

      if (data.email.length <= 0) {
        alert(data.email);
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      if (data.newPassword !== data.newPasswordConfirm) {
        alert("신규 패스워드가 일치하지 않습니다. 다시 입력해 주세요.");
        return;
      }

      await userPut(data.curPassword, {
        // businessUserId: user.businessUserId,
        // password: data.newPassword,
        // name: user.name,
        // email: data.email,
        // businessNum: user.businessNum,
        // stores: user.stores,
        // state: user.state,
        ...user,
        password: data.newPassword,
        email: data.email,
      });

      alert("수정이 완료되었습니다.");
      document.location.href = "/";

      // await userGet(user.businessUserId);
    } catch (err) {
      console.log(err);
      alert("현재 패스워드가 일치하지 않습니다.");
    }
  };

  return (
    user ? (
      <form className="EditAccountForm mt-4">
        <div className="md-form">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="businessUserId">ID</label>
          <input name="businessUserId" className="form-control" type="text" disabled value={user.businessUserId} />
          <p />
        </div>
        <div className="md-form">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="curPassword">현재 패스워드</label>
          <input name="curPassword" className="form-control" type="password" onChange={handleChange} />
          <p />
        </div>
        <div className="md-form">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password">새 패스워드</label>
          <input name="newPassword" className="form-control" type="password" onChange={handleChange} />
          <p />
        </div>
        <div className="md-form">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="passwordConfirm">새 패스워드 확인</label>
          <input name="newPasswordConfirm" className="form-control" type="password" onChange={handleChange} />
          <p />
        </div>
        <div className="md-form">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="name">이름</label>
          <input name="name" className="form-control" type="text" disabled value={user.name} />
          <p />
        </div>
        <div className="md-form">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">이메일</label>
          <input
            name="email"
            className="form-control"
            type="text"
            defaultValue={user.email}
            onChange={handleChange}
          />          <p />
        </div>
        <div className="md-form">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="businessNum">사업자 등록번호</label>
          <input name="businessNum" className="form-control" type="text" disabled value={user.businessNum} />
          <p />
        </div>

        <div className="text-center">
          <Link className="btn btn-secondary" to="/">취소</Link>{" "}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn btn-primary" onClick={updateUser}>수정</Link>
        </div>
      </form>
    ) : (
      <div>사용자 정보가 없습니다.</div>
    )
  );
};

export default EditAccountForm;
