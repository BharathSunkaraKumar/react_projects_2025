import React from "react";

const Profile = ({
  avatar_url,
  created_at,
  followers,
  following,
  location,
  login,
  name,
  public_repos,
  blog,
}) => {
  const createdDate = new Date(created_at);
  console.log(name);
  return (
    <div>
      <div className="user">
        <div className="user-image">
          <img src={avatar_url} alt={name} />
          {/* <p>{name}</p> */}
        </div>
        <div className="user-details">
          <a href={`https://github.com/${login}`}>{name || login}</a>
          <p>
            User joined on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()} 🗓️`}
          </p>
          <p>Public Repos: {public_repos} 📑</p>
        </div>
        <div className="follow">
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
