// src/components/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styling/UserList.css"; // Assume you've created basic styles

const UserList = ({ totalItems, itemsPerPage }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("");
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  useEffect(() => {
    fetchUsers();
  }, [currentPage, gender]);

  const fetchUsers = async () => {
    const resultsPerPage = 10;
    const apiURL = `https://randomuser.me/api/?page=${currentPage}&results=${resultsPerPage}&gender=${gender}`;
    const response = await axios.get(apiURL);
    setUsers(response.data.results);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="container">
        <h1>List of Users</h1>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-text"
        />
        <select
          className="gender-text"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <ul>
          {users
            .filter((user) =>
              `${user.name.first} ${user.name.last}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map((user) => (
              <li key={user.login.uuid}>
                <Link to={`/profile/${user.login.uuid}`}>
                  {user.name.first} {user.name.last} - {user.gender}
                </Link>
              </li>
            ))}
        </ul>

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
    </div>
  );
};

export default UserList;
