import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styling/UserList.css";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [genderFilter, setGenderFilter] = useState(
    localStorage.getItem("genderFilter") || ""
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("genderFilter", genderFilter);
    fetchUsers();
  }, [currentPage, genderFilter]);

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  }, [searchTerm]);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      let url = `https://randomuser.me/api/?page=${currentPage}&results=10&gender=${genderFilter}`;
      const response = await axios.get(url);
      setUsers(response.data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenderChange = (e) => {
    setGenderFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => prev + direction);
  };

  return (
    <div className="container">
      <h1 className="header">User Listing</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="filter-section">
            <label>
              Filter by Gender:
              <select onChange={handleGenderChange} value={genderFilter}>
                <option value="">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <ul className="user-list">
            {users.map((user, index) => (
              <li key={index}>
                <Link to={`/profile/${user.login.uuid}`}>
                  {" "}
                  {/* Use a unique identifier */}
                  {user.name.first} {user.name.last} - {user.gender}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <button
              disabled={currentPage <= 1}
              onClick={() => handlePageChange(-1)}
            >
              Prev
            </button>
            <button onClick={() => handlePageChange(1)}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserList;
