import React from "react";

const UserCard = ({ user }) => {
  const localImagePath = `/images/${user.id}.jpg`;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <img
        crossorigin="anonymous"
        className="w-24 h-24 rounded-full mx-auto"
        src={localImagePath}
        alt={user.fullName}
      />

      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{user.fullName}</h2>
        <p className="text-gray-500">@{user.userName}</p>
        <a
          href={user.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          View Profile
        </a>
        <p className="mt-2 text-sm">
          Verified: <span className="font-bold">{user.isVerified}</span>
        </p>
        <p className="mt-2 text-sm">
          Followed by you:{" "}
          <span className="font-bold">{user.followedByYou}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
