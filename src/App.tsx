import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Search from "./components/Search";
import Card from "./components/Card";
import { User } from "./types";

function App() {
  const [users, setUsers] = useState<User[] | []>([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetUsers = async () => {
    if (keyword === "") return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${keyword}`
      );
      setUsers(response.data.items);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
      setKeyword("");
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  if (loading) return <div>Loading Users....</div>;
  if (error) return <div>Error {error}</div>;

  return (
    <div id="app">
      <div className="container">
        <Search
          handleOnChange={handleOnChange}
          handleGetUsers={handleGetUsers}
        />

        {users.length === 0 && <div>Enter username to search users</div>}

        <div className="row">
          {users.map((user) => (
            <Card
              key={user.id}
              name={user.login}
              avatarUrl={user.avatar_url}
              url={user.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
