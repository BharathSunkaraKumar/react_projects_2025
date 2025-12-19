import React, { useEffect, useState } from "react";
import "./Gitprofile.css";
import Profile from "./Profile";
const GitProfile = () => {
  const [name, setName] = useState("BharathSunkaraKumar");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`https://api.github.com/users/${name}`);
      const data = await resp.json();

      if (data) {
        setUser(data);
        setLoading(false);
        setName("");
        console.log(user);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  const handleSearch = () => {
    fetchProfile();
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="git-wrapper">
      <div className="title-github">
        GitHub <span>Profile😃</span>
      </div>
      <div className="git-container">
        <div className="git-search">
          <div className="git-input">
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
      </div>
      <div className="profile">
        {user != null ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default GitProfile;
