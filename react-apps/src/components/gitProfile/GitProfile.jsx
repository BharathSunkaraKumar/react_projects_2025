import React, { useEffect, useState } from "react";
import "./Gitprofile.css";
import Profile from "./Profile";
const GitProfile = () => {
  const [name, setName] = useState("BharathSunkaraKumar");
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {
      const resp = await fetch(`https://api.github.com/users/${name}`);
      const data = await resp.json();

      console.log(data);
      if (data) {
        setUser(data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  const handleSearch = () => {};
  return (
    <div className="git-wrapper">
      <div className="git-container">
        <h1>GitHub Profile</h1>
        <div className="git-search">
          <div>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="profile">
          <Profile
            avatar_url={user?.avatar_url}
            created_at={user?.created_at}
            followers={user?.followers}
            following={user?.following}
            location={user?.location}
            login={user?.login}
            name={user?.name}
            public_repos={user?.public_repos}
            blog={user?.blog}
          />
        </div>
      </div>
    </div>
  );
};

export default GitProfile;
