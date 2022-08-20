import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersInfo from "../data/usersInfo.json";
import "../style/login.css";

const LoginForm = ({ User }) => {
   const navigate = useNavigate();
   const [error, setError] = useState("");
   const [details, setDetails] = useState({ name: "", email: "", password: "" });

   const fullData = usersInfo.UserInfo;

   const submitHandler = (e) => {
      e.preventDefault();
      console.log(details);
      Login(details);
   };

   const Login = (details) => {
      fullData.map((eachData) => {
         if (
            details.email === eachData.email &&
            details.password === eachData.password
         ) {
            console.log("Logged in");
            navigate("/welcome");
            console.log(details);
            User(details);
         } else {
            console.log("Data, don't match");
            setError("Data, don't match");
         }
         return eachData;
      });
   };

   return (
      <React.Fragment>
         <div className="welcome">
            <form onSubmit={submitHandler}>
               <div className="form-inner">
                  <h2>Login</h2>
                  {error !== "" ? <div className="error">{error}</div> : ""}
                  <div className="form-group">
                     <label htmlFor="name">Name:</label>
                     <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) =>
                           setDetails({ ...details, name: e.target.value })
                        }
                        value={details.name}
                     ></input>
                  </div>
                  <div className="form-group">
                     <label htmlFor="email">Email: </label>
                     <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) =>
                           setDetails({ ...details, email: e.target.value })
                        }
                        value={details.email}
                     ></input>
                  </div>
                  <div className="form-group">
                     <label htmlFor="password">Password: </label>
                     <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) =>
                           setDetails({ ...details, password: e.target.value })
                        }
                        value={details.password}
                     ></input>
                  </div>
                  <input type="submit" value="Login" />
               </div>
            </form>
         </div>
      </React.Fragment>
   );
};

export default LoginForm;
