import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="flex justify-center align-middle gap-2 input input-bordered">
      <div className="my-auto">
        <MdSearch />
      </div>
      <div className="form-control flex my-auto">
        <input
          type="text"
          placeholder="Search"
          className="bg-inherit w-24 md:w-auto"
        />
      </div>
    </div>
  );
};

export default Search;
