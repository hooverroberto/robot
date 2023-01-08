import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import { UserList } from "./UserList";

function App() {
  const [users, setusers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => 
  getUsers(), 
  []);
 

  return (
    <div className="container text-center mt-3">
      <h1>RoboFriends</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;