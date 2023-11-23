import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between mt-2">
      <button className="btn btn-outline opacity-50 cursor-not-allowed">
        Previous
      </button>
      <button className="btn btn-outline ">Next</button>
    </div>
  );
};

export default Pagination;
