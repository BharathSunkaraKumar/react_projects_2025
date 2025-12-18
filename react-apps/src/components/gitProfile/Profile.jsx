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
  return (
    <div>
      <div className="user">
        <div>
          <img src={avatar_url} alt={name} />
          {/* <p>{name}</p> */}
        </div>
        <div>
          <a href={`https://github.com/${login}`}>{name || login}</a>
          <p>
            User joined on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              moth: "shor",
            })}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
