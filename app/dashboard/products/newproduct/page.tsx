"use client";

import React from "react";
import ContentBox from "../../../components/ContentBox";

const AddProducts = () => {
  return (
    <ContentBox>
      <form className="form-control p-10">
        <div className="flex flex-row flex-wrap gap-3 justify-around">
          <input
            className="input input-bordered input-small w-5/12"
            type="text"
            placeholder="Title"
            name="title"
            required
          />
          <select
            className="select select-bordered w-5/12"
            name="cat"
            id="cat"
            defaultValue="DEFAULT"
          >
            <option value="DEFAULT" disabled>
              Pick a category
            </option>
            <option value="phone" key="phone">
              Phone
            </option>
            <option value="kitchen" key="kitchen">
              Kitchen
            </option>
            <option value="computer" key="computer">
              Computer
            </option>
          </select>
          <input
            className="input input-bordered input-small w-5/12"
            type="number"
            placeholder="Price"
            name="price"
            required
          />
          <input
            className="input input-bordered input-small w-5/12"
            type="number"
            placeholder="Stock Number"
            name="stock"
            required
          />
          <input
            className="input input-bordered input-small w-5/12"
            type="Text"
            placeholder="Color"
            name="color"
            required
          />
          <input
            className="input input-bordered input-small w-5/12"
            type="text"
            placeholder="Size"
            name="size"
            required
          />
          <textarea
            className="textarea textarea-bordered w-11/12"
            name="description"
            id="description"
            rows="10"
            placeholder="Description"
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

export default AddProducts;
