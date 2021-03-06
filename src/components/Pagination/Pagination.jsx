import React from "react";
import pagination from "../../utils/pagination/";

const Pagination = ({ total, activePage }) => (
  <ul className="">
    {pagination({ total, activePage }).map((page, index) => (
      <li key={index}>
        <a href="#">{page}</a>
      </li>
    ))}
  </ul>
);

export default Pagination;
