import React from "react";
import ContentBox from "../../../components/ContentBox";

const AddUser = () => {
  return (
    <ContentBox>
      <form className="form-control p-10">
        <div className="flex flex-row flex-wrap gap-3 justify-around">
          <input
            className="input input-bordered input-small w-5/12"
            type="text"
            placeholder="Username"
            name="username"
            required
          />

          <input
            className="input input-bordered input-small w-5/12"
            type="email"
            placeholder="Email"
            name="email"
            required
          />

          <input
            className="input input-bordered input-small w-5/12"
            type="tel"
            placeholder="Phone"
            name="phone"
            required
          />

          <input
            className="input input-bordered input-small w-5/12"
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <select
            className="select select-bordered w-5/12"
            name="isAdmin"
            id="isAdmin"
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Is Admin?
            </option>
            <option value="admin" key="yes">
              Yes
            </option>
            <option value="client" key="no">
              No
            </option>
          </select>

          <select
            className="select select-bordered w-5/12"
            name="isActive"
            id="isActive"
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Is Active?
            </option>
            <option value="admin" key="yes">
              Yes
            </option>
            <option value="client" key="no">
              No
            </option>
          </select>

          <textarea
            className="textarea textarea-bordered w-11/12"
            name="address"
            id="address"
            rows={10}
            placeholder="Address"
          ></textarea>
        </div>

        <div className="my-10 text-center">
          <button className="btn btn-primary btn-wide" type="submit">
            Add
          </button>
        </div>
      </form>
    </ContentBox>
  );
};

export default AddUser;
