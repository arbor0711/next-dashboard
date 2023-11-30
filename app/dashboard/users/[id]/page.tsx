import ContentBox from "@/app/components/ContentBox";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleUserPage = () => {
  return (
    <div className="flex gap-5">
      <div className="w-1/4">
        <ContentBox>
          <div>
            <Image
              src="https://i.pravatar.cc/300"
              width={300}
              height={300}
              alt=""
              className="rounded"
            />
            <h3 className="mt-5">Username</h3>
          </div>
        </ContentBox>
      </div>

      <div className="  w-3/4  ">
        <ContentBox>
          <>
            <form className="form-control">
              <label className="mb-1 -text--textSoft mt-5">Username</label>
              <input
                className="input input-bordered input-sm"
                type="text"
                name="username"
                placeholder="Username"
              />

              <label className="mb-1 -text--textSoft mt-5">Email</label>
              <input
                className="input input-bordered input-sm"
                type="email"
                name="email"
                placeholder="username@email.com"
              />

              <label className="mb-1 -text--textSoft mt-5">Password</label>
              <input
                className="input input-bordered input-sm"
                type="password"
                name="password"
                placeholder="lskjdhf"
              />

              <label className="mb-1 -text--textSoft mt-5">Phone</label>
              <input
                className="input input-bordered input-sm"
                type="tel"
                name="tel"
                placeholder="+123456"
              />

              <label className="mb-1 -text--textSoft mt-5">Address</label>
              <textarea
                className="textarea textarea-bordered"
                name="address"
                placeholder="New York"
              />

              <label className="mb-1 -text--textSoft mt-5">Is Admin?</label>
              <select
                className="select select-bordered"
                name="isAdmin"
                id="isAdmin"
              >
                <option value="admin">Yes</option>
                <option value="client">No</option>
              </select>

              <label className="mb-1 -text--textSoft mt-5">Is Active?</label>
              <select
                className="select select-bordered"
                name="isActive"
                id="isActive"
              >
                <option value="active">Yes</option>
                <option value="passive">No</option>
              </select>
            </form>

            <div className="flex gap-5">
              <button type="submit" className="btn btn-primary mt-5">
                Update
              </button>
              <button type="reset" className="btn btn-primary mt-5">
                Reset
              </button>
              <Link href="/dashboard/users">
                <button type="reset" className="btn btn-primary mt-5">
                  Back
                </button>
              </Link>
            </div>
          </>
        </ContentBox>
      </div>
    </div>
  );
};

export default SingleUserPage;
