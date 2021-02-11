import React from "react";
import { useState, useEffect } from "react";

const PaginationBar = ({ showPerPage, onPaginationChange, total }) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const value = showPerPage * count;
    onPaginationChange(value - showPerPage, value);
  }, [count]);

  const [numberOfButton, setNumberOfButton] = useState(
    Math.ceil(total / showPerPage)
  );

  const OnButtonClick = (type) => {
    if (type == "prev") {
      if (count == 1) {
        return setCount(1);
      } else {
        return setCount(count - 1);
      }
    } else if (type == "next") {
      if (count == numberOfButton) {
        return setCount(count);
      } else {
        return setCount(count + 1);
      }
    }
  };
  return (
    <div className="container">
      <div className="text-align:center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                href="!#"
                onClick={() => OnButtonClick("prev")}
              >
                Previous
              </a>
            </li>
            {new Array(numberOfButton).fill("").map((el, index) => (
              <li className={`page-item ${index+1 === count ? "active" : null}`}>
                <a class="page-link" href="!#" onClick={()=>{setCount(index+1)}}>
                  {index+1}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a
                class="page-link"
                href="!#"
                onClick={() => OnButtonClick("next")}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginationBar;
