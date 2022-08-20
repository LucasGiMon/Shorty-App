import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/category.scss";

const Categories = ({ idFilter }) => {
   const navigate = useNavigate();

   const catalogHandler = (e) => {
      e.preventDefault();
      const buttonId = e.target.id;
      console.log(buttonId);
      navigate("/category-multimedia");
      if (buttonId === "Horror") {
         idFilter(buttonId);
      }
      if (buttonId === "Documentary") {
         idFilter(buttonId);
      }
      if (buttonId === "Comedy") {
         idFilter(buttonId);
      }
      if (buttonId === "Adventure") {
         idFilter(buttonId);
      }
   };

   return (
      <div className="container">
         <div className="row">
            <h1 className="header">Categories</h1>

            <div className="col">
               <main className="page-content">
                  <div className="card">
                     <div className="content">
                        <h2 className="title">Documentaries</h2>
                        <p className="copy">
                           Condense and useful documentaries to rice your knowledge
                           about almost everything
                        </p>
                        <button
                           id="Documentary"
                           onClick={catalogHandler}
                           className="btn"
                        >
                           Open Catalog
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <div className="content">
                        <h2 className="title">Adventure</h2>
                        <p className="copy">
                           Enjoy the stories of different characters around the world,
                           there are going to be some surprises on the road
                        </p>
                        <button
                           id="Adventure"
                           onClick={catalogHandler}
                           className="btn"
                        >
                           Open Catalog
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <div className="content">
                        <h2 className="title">Horror</h2>
                        <p className="copy">
                           You need to concentrate and focus while you watch these
                           films, don't be scared, or maybe just a little
                        </p>
                        <button id="Horror" onClick={catalogHandler} className="btn">
                           Open Catalog
                        </button>
                     </div>
                  </div>
                  <div className="card">
                     <div className="content">
                        <h2 className="title">Comedies</h2>
                        <p className="copy">
                           If you just need to chill for 10 minutes, this is your
                           category, some laughs are always welcome
                        </p>
                        <button id="Comedy" onClick={catalogHandler} className="btn">
                           Open Catalog
                        </button>
                     </div>
                  </div>
               </main>
            </div>
         </div>
      </div>
   );
};

export default Categories;
