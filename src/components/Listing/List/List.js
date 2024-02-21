import { useState } from "react";
import Gender from "../Gender/Gender";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../Search/SearchBar";
import UserList from "../UserList/UserList";
import "./List.css";

const List = ({ totalItems, itemsPerPage }) => {
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

        <UserList
          searchTerm={searchTerm}
          gender={gender}
          currentPage={currentPage}
        />

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

export default List;
