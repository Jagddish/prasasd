import React from "react";
import UserList from "./components/UserList";
import users from "./assets/latest.json"; // Import the JSON data

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <UserList users={users} />
    </div>
  );
};

export default App;
