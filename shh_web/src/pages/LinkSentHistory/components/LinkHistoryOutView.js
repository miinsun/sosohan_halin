import PropTypes from "prop-types";
import React from "react";
import { Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CTTable } from "../../../components";

const checkStateAndManagement = (data, changeState) => {
  if (data.state === 0) {
    return (
      <>
        <td><Badge bg="secondary">대기상태</Badge></td>
        <td>{data.content}</td>
        <td>
          {/* eslint-disable-next-line  */}
          <a className="btn btn-primary" onClick={() => changeState(data.linkId, 1, 1)}>
            수락
          </a>
          {/* eslint-disable-next-line  */}
          <a className="btn btn-info" onClick={() => changeState(data.linkId, -1, data.management)}>
            거절
          </a>
        </td>
      </>
    );
  }
  if (data.state === 1) {
    if (data.management === -1) {
      return (
        <>
          <td><Badge bg="secondary">연계종료</Badge></td>
          <td>{data.content}</td>
          <td />
        </>
      );
    }

    return (
      <>
        <td><Badge bg="primary">연계 중</Badge></td>
        <td>{data.content}</td>
        <td>
          {data.management === -1}
          {/* eslint-disable-next-line  */}
          <a className="btn btn-secondary" onClick={() => changeState(data.linkId, data.state, -1)}>
            연계취소
          </a>
        </td>
      </>
    );
  }
  return (
    <>
      <td><Badge bg="secondary">승인거부</Badge></td>
      <td>{data.content}</td>
      <td />
    </>
  );
};

const LinkHistoryOutView = ({ total, results, changeState }) => (
  <div>
    <CTTable
      columns={["번호 ", "수신상점명 ", "제안상태 ", "제안내용", "액션"]}
      total={total}
      emptyDataMessage="발신한 제안 내역이 없습니다."
    >
      {total > 0
        && results.map((data, index) => (
          <tr key={data.linkId}>
            <td>{index + 1}</td>
            <td>{data.receiver.name}</td>
            {checkStateAndManagement(data, changeState)}
          </tr>
        ))}
    </CTTable>
  </div>
);

LinkHistoryOutView.propTypes = {
  total: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array,
  changeState: PropTypes.func,
};

LinkHistoryOutView.defaultProps = {
  total: 0,
  results: [],
  changeState: () => {},
};

export default LinkHistoryOutView;
