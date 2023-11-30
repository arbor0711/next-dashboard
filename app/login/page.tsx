import React from "react";
import ContentBox from "../components/ContentBox";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen grid  place-content-center ">
      <div className=" w-96 h-fit">
        <ContentBox>
          <form className="form-control">
            <h1 className="text-xl font-bold my-7 text-center">Login</h1>
            <label>Username</label>
            <input
              className="input input-bordered mb-5 mt-2"
              placeholder="username"
            />

            <label>Password</label>
            <input
              className="input input-bordered mb-5 mt-2"
              placeholder="password"
            />

            <button className="btn btn-primary text-lg mb-5" type="submit">
              Login
            </button>
          </form>
        </ContentBox>
      </div>
    </div>
  );
};

export default LoginPage;
