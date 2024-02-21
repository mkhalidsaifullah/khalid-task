import axios from "axios";
import React, { useState } from "react";

const UserList = ({ gender, currentPage }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, [currentPage, gender]);

  const fetchUsers = async () => {
    const resultsPerPage = 10;
    const apiURL = `https://randomuser.me/api/?page=${currentPage}&results=${resultsPerPage}&gender=${gender}`;
    const response = await axios.get(apiURL);
    setUsers(response.data.results);
  };

  return (
    <>
      <ul>
        {users
          .filter((user) =>
            `${user.name.first} ${user.name.last}`
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
          .map((user) => (
            <li key={user.login.uuid}>
              <Link to={`/profile`} state={{ user }}>
                {user.name.first} {user.name.last} - {user.gender}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default UserList;
