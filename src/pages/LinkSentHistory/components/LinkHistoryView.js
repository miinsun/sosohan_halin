import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { CTTable } from "../../../components";
import { Button } from "reactstrap";

const LinkHistoryView = ({ total, results, changeState }) => (
  <div>
    <CTTable
      columns={["번호 ", "수신상점명 ", "제안상태 ", "액션 "]}
      total={total}
      emptyDataMessage="발신한 제안 내역이 없습니다."
    >
      {total > 0
        && results.map((data, index) => (
          <tr key={data.linkId}>
            <td>{index + 1}</td>
            <td>{data.receiver.name}</td>
            <td>{data.state}</td>
            {data.state && data.state === "1" ? (
              <td>
                {/* eslint-disable-next-line  */}
                <a
                  className="btn btn-primary"
                  onClick={() => changeState(data)}
                >
                  연결끊기
                </a>
              </td>
            ) : (
              <td>
                <Button color="secondary" size="lg" disabled>대기 중</Button>
              </td>
            )}
          </tr>
        ))}
    </CTTable>
  </div>
);

LinkHistoryView.propTypes = {
  total: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array,
  changeState: PropTypes.func,
};

LinkHistoryView.defaultProps = {
  total: 0,
  results: [],
  changeState: () => {},
};

export default LinkHistoryView;
