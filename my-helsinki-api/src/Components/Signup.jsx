import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const login = (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data ==="exist") {
            alert("User already exists");
          } else if (res.data === "not exist") {
            history("/home", { state: { id: email } });
            console.log("HistorY: " + history)
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form action="POST">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" onClick={login} />
        {/* <button onClick={login}>Login</button> */}
      </form>
      <br />
      <p>OR</p>
      <br />

      <Link to="/login">Login Page</Link>
    </div>
  );
};

export default Signup;
