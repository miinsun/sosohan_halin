import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../components";

const LoginForm = () => {
  const { user, userLogin } = useUser();

  const [data, setData] = useState({
    businessUserId: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    try {
      console.log(data);

      if (data.businessUserId.length <= 0 || data.password.length <= 0) {
        alert("정확한 정보를 입력해 주세요.");
        return;
      }

      // await userLogin({
      //   businessUserId: data.businessUserId,
      //   password: data.password,
      // });
      const response = await userLogin(data.businessUserId, data.password);
      sessionStorage.setItem("sessionId", response.data);

      document.location.href = "/";
    } catch (err) {
      alert("로그인 정보를 확인해 주세요.");
      console.log(err);
      // document.location.href = "/login";
    }
  };

  return (
    <form>
      {/* <div className="input-group mb-3">
      ID &nbsp; <input
        type="text"
        name="businessUserId"
        className="form-control input_user"
        onChange={handleChange}
      />
    </div> */}
      <div className="form-floating">
        <input
          type="text"
          name="businessUserId"
          className="form-control input_user"
          onChange={handleChange}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="businessUserId">ID</label>
      </div>

      {/* <div className="input-group mb-2">
      PW &nbsp; <input type="password" name="password" className="form-control input_pass" onChange={handleChange} />
    </div> */}

      <div className="form-floating">
        <input type="password" name="password" className="form-control" onChange={handleChange} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          <input type="checkbox" defaultValue="remember-me" /> Remember me
        </label>
      </div>
      {/* <Link className="w-100btn btn-lg btn-secondary" onClick={login}>Login</Link> */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link className="w-100 btn btn-lg btn-primary" type="button" onClick={login}>Login</Link>
    </form>

  //  <form>
  //     {/* <div className="input-group mb-3">
  //       ID &nbsp; <input
  //         type="text"
  //         name="business UserId"
  //         className="form-control input_user"
  //         onChange={handleChange}
  //       />
  //     </div> */}
  //     <div className="form-floating">
  //       <input
  //         type="text"
  //         name="businessUserId"
  //         className="form-control input_user"
  //         onChange={handleChange}
  //       />
  //       {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
  //       <label htmlFor="businessUserId">ID</label>
  //     </div>

  //     {/* <div className="input-group mb-2">
  //       PW &nbsp; <input type="password" name="password"
  // className="form-control input_pass" onChange={handleChange} />
  //     </div> */}

  //     <div className="form-floating">
  //       <input type="password" name="password" className="form-control" onChange={handleChange} />
  //       {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
  //       <label htmlFor="floatingPassword">Password</label>
  //     </div>

  //     <div className="form-group">
  //       <div className="custom-control custom-checkbox">
  //         <input type="checkbox" className="custom-control-input" id="customControlInline" />
  //         {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
  //         <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
  //       </div>
  //     </div>
  //     <div className="d-flex justify-content-center mt-3 login_container">
  //       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
  //       <Link className="btn btn-secondary" onClick={login}>Login</Link>
  //     </div>
  //   </form>

  );
};

export default LoginForm;

// <main class="form-signin">
//   <form>
//     <img class="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
//     <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

//     <div class="form-floating">
//       <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
//       <label for="floatingInput">Email address</label>
//     </div>
//     <div class="form-floating">
//       <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
//       <label for="floatingPassword">Password</label>
//     </div>

//     <div class="checkbox mb-3">
//       <label>
//         <input type="checkbox" value="remember-me"> Remember me
//       </label>
//     </div>
//     <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//     <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
//   </form>
// </main>
