/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { List } from "immutable";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLink } from "../../../components";

const LinkSuggestionInput = () => {
  const { linkPost } = useLink();

  const [data, setData] = useState({
    linkId: "",
    proposerId: "",
    receiverId: "",
    content: "",
    isWatched: "",
    state: "",
    management: "",
    proposalDate: "",
    proposer: List([]),
    receiver: List([]),
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const postLink = async () => {
    try {
      console.log(data);

      if (data.poposerId.length <= 0 || data.receiverId.length <= 0) {
        alert("잘못된 접근입니다");
        return;
      }

      if (data.content.length === 0) {
        await linkPost({
          linkId: "",
          proposerId: "2",
          receiverId: "3",
          content: `${data.proposerId}와 ${data.receiverId}의 제안을 원합니다`,
          isWatched: 1,
          state: 0,
          management: 0,
          proposalDate: "",
          proposer: List([]),
          receiver: List([]),
        });
      } else {
        await linkPost({
          linkId: "",
          proposerId: "2",
          receiverId: "3",
          content: data.content,
          isWatched: 1,
          state: 0,
          management: 0,
          proposalDate: "",
          proposer: List([]),
          receiver: List([]),
        });
      }
    } catch (err) {
      console.log(err);
    }
    console.log(data);
    alert(`${data.receiverId}에 연계 신청을 보냈습니다`);
  };

  return (
    <div className="linkSuggestion">
      <div className="mx-3" id="status">
        &apos;{data.receiverId}&apos;에 연계 제안을 보냅니다
      </div>
      <form id="message-form" action="#" method="post">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="content">내용</label>
        <input name="content" className="form-control" type="text" onChange={handleChange} placeholder={`${data.proposerId}와 ${data.receiverId}의 제안을 원합니다`} />

      </form>
      <div className="DoBtn">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-secondary me-md-2 mx-3" type="button">
            취소
          </button>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="btn btn-primary" onClick={postLink}>
            제안하기
          </Link>
        </div>
      </div>
    </div>

  );
};
export default LinkSuggestionInput;
