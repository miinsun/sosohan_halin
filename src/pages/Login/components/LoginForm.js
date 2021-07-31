import React from "react";

const LoginForm = () => (
  <form>
    <div className="input-group mb-3">
      ID &nbsp; <input type="text" name className="form-control input_user" defaultValue placeholder="username" />
    </div>
    <div className="input-group mb-2">
      PW &nbsp; <input type="password" name className="form-control input_pass" defaultValue placeholder="password" />
    </div>
    <div className="form-group">
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="customControlInline" />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
      </div>
    </div>
    <div className="d-flex justify-content-center mt-3 login_container">
      <button type="button" name="button" className="btn login_btn">Login</button>
    </div>
  </form>

);

export default LoginForm;
