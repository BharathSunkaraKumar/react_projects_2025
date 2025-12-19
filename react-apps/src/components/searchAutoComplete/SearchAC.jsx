import React, { use, useEffect, useState } from "react";
import { SearchData } from "./SearchData";

const SearchAC = () => {
  const [name, setName] = useState("");
  const [users, setUSers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDropdown, setshowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://dummyjson.com/users");
      const data = await resp.json();
      if (data) {
        setUSers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };
  console.log(users);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setName(query);
    if (query.length > 1) {
      const filteredUsers =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredUsers);
      setshowDropDown(true);
    } else {
      setshowDropDown(false);
    }
  };
  console.log(name, filteredUsers);

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setName(e.target.innerText);
    setshowDropDown(false);
    setFilteredUsers([]);
  };
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Search</h1>
          <div className="">
            <input
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter Name"
            />
          </div>
        </div>
      )}
      <div>
        <SearchData handleClick={handleClick} data={filteredUsers} />
      </div>
    </div>
  );
};

export default SearchAC;
