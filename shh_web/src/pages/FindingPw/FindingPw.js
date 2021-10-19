import React, { useState } from "react";
import {
  Modal, Button,
} from "react-bootstrap";
import { useUser } from "../../components";
import CTLogo from "../../components/CTLogo";
import FindingPwForm from "./components/FindingPwForm";

const FindingPw = () => {
  const { userFindingPw } = useUser();

  const [data, setData] = useState({
    businessUserId: "",
    email: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const findPw = async () => {
    try {
      console.log(data);

      if (data.businessUserId.length <= 0 || data.email.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      await userFindingPw(data.businessUserId, data.email);
      document.location.href = "/findingpw/result";
      // eslint-disable-next-line react/no-this-in-sfc
      // this.forceUpdate();
    } catch (err) {
      alert("일치하는 회원이 없습니다.");
      console.log(err);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>비밀번호 찾기</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FindingPwForm handleChange={handleChange} />
      </Modal.Body>

      <Modal.Footer>
        {/* <Button className="btn btn-secondary">취소</Button>{" "} */}
        <Button className="btn btn-primary" onClick={findPw}>임시 비밀번호 발급</Button>
      </Modal.Footer>
    </>

  // <div className="FindingPw">
  //   <CTLogo />
  //   <h5>비밀번호 찾기</h5>
  //   <FindingPwForm />
  // </div>
  );
};

export default FindingPw;
