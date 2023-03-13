import { useState, useEffect } from "react";
import axios from "axios";

const UsersForm = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/getUsers").then((response) => {
      setListOfUsers(response.data);
      console.log(setListOfUsers);
    });
  }, []);

  const createUser = () => {
    axios
      .post("http://localhost:8000/createUser", {
        name,
        age,
        username,
      })
      .then((response) => {
        setListOfUsers([...listOfUsers, { name, age, username }]);
      });
  };

  return (
    <div>
      {listOfUsers.map((user) => {
        return (
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Username: {user.username}</p>
          </div>
        );
      })}
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}>Create user</button>
      </div>
    </div>
  );
};

export default UsersForm;
