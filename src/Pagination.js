import React from "react";
import { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange,total }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const value = showPerPage * count;
    onPaginationChange(value - showPerPage, value);
  }, [count]);

  const OnButtonClick = (type) => {
    if (type == "prev") {
      if (count == 1) {
        return setCount(1);
      } else {
        return setCount(count - 1);
      }
    } else if (type == "next") {
        if(count == Math.ceil(total/showPerPage)){
            return setCount(count);
        } else {
            return setCount(count + 1);
        }
    }
  };
  return (
    <div className="d-flex justify-content-between">
      <button className="bg-danger ml-0" onClick={()=>OnButtonClick("prev")}>
        Previous
      </button>
      <button className="bg-danger mr-0" onClick={()=>OnButtonClick("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
