import React from "react";
import ContentBox from "../components/ContentBox";

const LoginPage = () => {
  return (
    <div className="w-1/2 h-screen m-auto">
      <ContentBox>
        <form className="form-control ">
          <h1 className="h1">Login</h1>
          <label>Username</label>
          <input className="input input-bordered" placeholder="username" />

          <label>Password</label>
          <input className="input input-bordered" placeholder="password" />

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </ContentBox>
    </div>
  );
};

export default LoginPage;
