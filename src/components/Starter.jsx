import React from "react";
import "../style/starter.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImg from "../images/soloLogo.png";

const Starter = () => {
   let navigate = useNavigate();

   const handleSubmit = () => {
      navigate("/form");
   };

   return (
      <React.Fragment>
         <div className="container_str ">
            <div className="row">
               <div className="col welcome">
                  <img src={logoImg} alt="logoImg" width="250" height="250"></img>
                  <h1 className="header">Welcome to Shorty</h1>
                  <h3 className="my header2">Discover the best shorts on internet</h3>
                  <button
                     className="mt-4"
                     onClick={handleSubmit}
                     type="submit"
                     value="CONTINUE"
                  >
                     Login
                  </button>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Starter;
