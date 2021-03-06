import PropTypes from "prop-types";
import React from "react";
import {
  Button,
} from "react-bootstrap";
import { CTTable } from "../../../components";

const MyStorePrintView = ({ total, results, remove }) => (
  <div className="mx-auto col-6">
    <h4 className="mb-3">상점 수정/삭제</h4>
    <CTTable
      columns={[
        "번호",
        "상점명",
        "액션",
      ]}
      total={total}
      emptyDataMessage="등록된 상점이 없습니다."
    >
      {total > 0 && results.map((data, index) => (
        <tr key={data.storeId}>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>
            <Button variant="primary" className="mx-1" to="/storeRegistration">수정</Button>
            <Button variant="outline-secondary" className="mx-1" onClick={() => remove(data)}>삭제
            </Button>
          </td>
        </tr>
      ))}
    </CTTable>
  </div>
);

MyStorePrintView.propTypes = {
  total: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array,
  remove: PropTypes.func,
};

MyStorePrintView.defaultProps = {
  total: 0,
  results: [],
  remove: () => { },
};

export default MyStorePrintView;
