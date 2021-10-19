import { List } from "immutable";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useUser } from "../../components";
import SignupForm from "./components/SignupForm";

const Signup = () => {
  const { userSignup } = useUser();

  const [data, setData] = useState({
    businessUserId: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
    businessNum: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const signup = async () => {
    try {
      console.log(data);

      if (data.businessUserId.length <= 0 || data.name.length <= 0
        || data.email.length <= 0 || data.password.length <= 0) {
        alert("필수적인 정보를 입력해 주세요.");
        return;
      }

      if (data.password !== data.passwordConfirm) {
        alert("패스워드가 일치하지 않습니다. 다시 입력해 주세요.");
        return;
      }

      if (data.businessNum.length !== 10) {
        alert("사업자 등록번호의 길이가 형식에 맞지 않습니다.");
        return;
      }

      await userSignup({
        businessUserId: data.businessUserId,
        password: data.password,
        name: data.name,
        email: data.email,
        businessNum: data.businessNum,
        stores: List([]),
        state: 1,
      });
    } catch (err) {
      alert(err);
      console.log(err);
    }

    alert("가입이 완료되었습니다.");
    document.location.href = "/";
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <SignupForm handleChange={handleChange} />
      </Modal.Body>

      <Modal.Footer>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        {/* <Button className="btn btn-secondary">취소</Button>{" "} */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Button className="btn btn-primary" onClick={signup}>가입하기 </Button>
      </Modal.Footer>
    </>
  );
};
export default Signup;
