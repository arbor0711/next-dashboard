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
            <Image src="" width={300} height={300} alt="" className="rounded" />
            <h3 className="mt-5">Product</h3>
          </div>
        </ContentBox>
      </div>

      <div className="  w-3/4  ">
        <ContentBox>
          <>
            <form className="form-control">
              <label className="mb-1 -text--textSoft mt-5">Title</label>
              <input
                className="input input-bordered input-sm"
                type="text"
                name="title"
                placeholder="title"
              />

              <label className="mb-1 -text--textSoft mt-5">Price</label>
              <input
                className="input input-bordered input-sm"
                type="number"
                name="price"
                // placeholder={10}
              />

              <label className="mb-1 -text--textSoft mt-5">Stock</label>
              <input
                className="input input-bordered input-sm"
                type="number"
                name="stock"
                // placeholder={12}
              />

              <label className="mb-1 -text--textSoft mt-5">Color</label>
              <input
                className="input input-bordered input-sm"
                type="color"
                name="color"
                placeholder="red"
              />

              <label className="mb-1 -text--textSoft mt-5">Size</label>
              <input
                className="input input-bordered input-sm"
                type="text"
                name="size"
                placeholder="12*15*25 cm"
              />

              <label className="mb-1 -text--textSoft mt-5">Category</label>
              <select
                className="select select-bordered"
                name="category"
                id="category"
              >
                <option value="admin">Kitchen</option>
                <option value="client">Computer</option>
              </select>

              <label className="mb-1 -text--textSoft mt-5">Description</label>
              <textarea
                className="textarea textarea-bordered"
                name="description"
                placeholder="description"
              />
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
