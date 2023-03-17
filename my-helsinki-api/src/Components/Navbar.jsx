import "../App.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const login = (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:8000/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
            // alert("welcome back user!")
          } else if (res.data === "not exist") {
            alert("User has not signed up");
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div>
      <nav className="navbar navbar-default navbar-inverse" id="navbar" role="navigation" >
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
           
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
        
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <p className="navbar-text">Already have an account?</p>
              </li>
              <li className="dropdown">
                <button className="dropdown-toggle" data-toggle="dropdown"  id="nav-login">
                  <b>Login</b> <span className="caret"></span>
                </button>
                <ul id="login-dp" className="dropdown-menu">
                  <li>
                    <div className="row">
                      <div className="col-md-12">
                    
                        <form
                          className="form"
                          method="post"
                          action="login"
                          acceptCharset="UTF-8"
                          id="login-nav"
                        >
                          <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputPassword2">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail2"
                              placeholder="Email address"
                              required
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                          </div>
                          <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputPassword2">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword2"
                              placeholder="Password"
                              required
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                            <div className="help-block text-right">
                              <Link to="/password">Forget the password?</Link>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                              onClick={login}
                            >
                              Sign in
                            </button>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" />
                            </label>
                          </div>
                        </form>
                      </div>
                      <div className="bottom text-center">
                        New here ?{" "}
                        <Link to="/signup">
                          <b>Register</b>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
