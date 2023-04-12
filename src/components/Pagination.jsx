import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { clientContext } from "../contexts/ClientContext";

const Pagination1 = () => {
  const { totalPosts, postPerPage, currentPage, handlePage } =
    useContext(clientContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((page) => (
        <li key={page}>
          <Button
            style={{
              backgroundColor: page === currentPage ? "red" : "gray",
              color: "white",
              margin: "5px",
            }}
            onClick={() => handlePage(page)}
          >
            {page}
          </Button>
        </li>
      ))}
    </div>
  );
};

export default Pagination1;
