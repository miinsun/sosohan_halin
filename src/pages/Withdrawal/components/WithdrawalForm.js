import React from "react";

const WithdrawalForm = () => (
  <form className="WithdrawalForm">
    <div className="row">
      <div className="col-md-1 col-sm-1 col-lg-1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="curPassword">PW 입력</label>
      </div>
      <div className="col-md-4 col-sm-4 col-lg-4">
        <input name="curPassword" className="form-control" type="password" />
      </div>
    </div>
  </form>
);

export default WithdrawalForm;
