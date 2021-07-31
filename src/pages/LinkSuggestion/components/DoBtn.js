import React from "react";

const DoBtn = (props) => (
  <div className="DoBtn">
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button className="btn btn-primary me-md-2 mx-3" type="button">
        취소
      </button>
      <button className="btn btn-secondary" type="button">
        {props.do}
      </button>
    </div>
  </div>
);

export default DoBtn;
