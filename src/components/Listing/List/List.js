// src/components/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./List.css";
import Pagination from "../Pagination/Pagination";
import Gender from "../Gender/Gender";
import SearchBar from "../Search/SearchBar";

const UserList = ({ totalItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("");
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="container">
        <h1>List of Users</h1>

        <SearchBar setSearchTerm={setSearchTerm} />
        <Gender setGender={setGender} gender={gender} />
        <UserList />

        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
          pageNumbers={pageNumbers}
        />
      </div>
    </div>
  );
};

export default UserList;
