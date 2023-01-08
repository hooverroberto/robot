import React from "react";
import "./App.css";

export const UserList = ({ users }) => {
  return (
    <div className="d-flex justify-content-between flex-wrap">
      {users.map((user) => (
        <div key={user.id} className="bg bg-success mt-3 p-2 g" style={{width:250}}>          
          <img src ={`https://robohash.org/${user.id}`} alt="robot-pic" style={{width: "150px", height: "150px"}}></img>
          <div className="d-flex flex-column justify-content-center align-items-center margen">
            <p className="name">{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};