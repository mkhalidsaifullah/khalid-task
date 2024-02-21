import React from "react";
import "./Pagination.css";

const Pagination = ({ setCurrentPage, currentPage, totalPages,pageNumbers }) => {
  return (
    <div className="pagination-buttons">
      {/* Go to first Page Button */}
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        First
      </button>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          style={{
            marginRight: "5px",
            backgroundColor: currentPage === number ? "#c0c0c0" : "",
          }}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      {/* Go to Last Page Button */}
      <button
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
