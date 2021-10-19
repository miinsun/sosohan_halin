import React, { useState } from "react";
import {
  Modal, Button,
} from "react-bootstrap";
import { useUser } from "../../components";
import CTLogo from "../../components/CTLogo";
import FindingIdForm from "./components/FindingIdForm";

const FindingId = () => {
  const { userFindingId } = useUser();

  const [findingIdData, setfindingIdData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setfindingIdData({
      ...findingIdData,
      [e.target.name]: e.target.value,
    });
  };

  const findId = async () => {
    try {
      console.log(findingIdData);

      if (findingIdData.name.length <= 0 || findingIdData.email.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      const response = await userFindingId(findingIdData.name, findingIdData.email);
      document.location.href = `/findingid/result/${response.data}`;
    } catch (err) {
      alert("일치하는 회원이 없습니다.");
      console.log(err);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>아이디 찾기</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FindingIdForm handleChange={handleChange} />
      </Modal.Body>

      <Modal.Footer>
        {/* <Button className="btn btn-secondary">취소</Button>{" "} */}
        <Button className="btn btn-primary" onClick={findId}>아이디 찾기</Button>
      </Modal.Footer>
    </>
  );
};

export default FindingId;
