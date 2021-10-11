/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { List } from "immutable";
import React, {
  useState, forwardRef, useImperativeHandle, useEffect,
} from "react";
import { Link } from "react-router-dom";
import { useLink, useStore } from "../../../components";

const LinkSuggestionInput = forwardRef((props, ref) => {
  const { linkPost } = useLink();
  const { store, storeGet } = useStore();

  const storeId = sessionStorage.getItem("currentStoreId");

  const fetch = async () => {
    try {
      await storeGet(storeId);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const [data, setData] = useState({
    proposerId: storeId,
    receiverId: "",
    content: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const postLink = async () => {
    try {
      if (data.content.length === 0) {
        await linkPost({
          proposerId: data.proposerId,
          receiverId: "3",
          content: `${data.proposerId}와 ${data.receiverId}의 제안을 원합니다`,
        });
      } else {
        await linkPost({
          proposerId: data.proposerId,
          receiverId: "3",
          content: data.content,
        });
      }
    } catch (err) {
      console.log(err);
    }
    console.log(store);
    alert(`${store.name}에 연계 신청을 보냈습니다`);
  };

  useImperativeHandle(ref, () => ({
    submit() {
      postLink();
    },
  }));

  return (
    <div className="linkSuggestion">
      <div className="mx-3" id="status">
        &apos;{data.receiverId}&apos;에 연계 제안을 보냅니다
      </div>
      <form id="message-form" action="#" method="post">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="content">내용</label>
        <input name="content" className="form-control" type="text" onChange={handleChange} placeholder={`${store.name}와 ${data.receiverId}의 제안을 원합니다`} />

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
});

export default LinkSuggestionInput;
