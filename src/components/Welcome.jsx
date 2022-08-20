import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = ({ Logout, User }) => {
   const [name] = useState(User);
   const navigate = useNavigate();

   const submitHandler = (e) => {
      e.preventDefault();
      Logout();
      navigate("/form");
   };

   const submitContinue = (e) => {
      e.preventDefault();
      navigate("/home");
   };

   return (
      <article className="welcome">
         <h1 className="header">Welcome, {name}</h1>
         {/* <button className="welcome_btn" onClick={submitHandler}>Logout</button> */}
         <button className="welcome_btn" onClick={submitContinue}>Continue</button>
      </article>
   );
};

export default Welcome;
