import React, { useEffect, useState } from "react";
import "../../style/content.scss";
import filmsInfo from "../../data/filmsInfo.json";
import { useNavigate } from "react-router-dom";

const ContentCategory = ({ filterCat, setTitle }) => {
   const infoFilms = filmsInfo;
   const [cards] = useState(filterCat);
   const [films, setFilms] = useState([]);

   const navigate = useNavigate();

   useEffect(() => {
      if (cards === "Horror") {
         setFilms((prevState) => {
            let updateFilm = [...prevState];
            updateFilm = infoFilms.Horror;
            return updateFilm;
         });
      }
      if (cards === "Comedy") {
         setFilms((prevState) => {
            let updateFilm = [...prevState];
            updateFilm = infoFilms.Comedy;
            return updateFilm;
         });
      }
      if (cards === "Documentary") {
         setFilms((prevState) => {
            let updateFilm = [...prevState];
            updateFilm = infoFilms.Documentary;
            return updateFilm;
         });
      }
      if (cards === "Adventure") {
         setFilms((prevState) => {
            let updateFilm = [...prevState];
            updateFilm = infoFilms.Adventure;
            return updateFilm;
         });
      }
   }, [
      cards,
      infoFilms.Comedy,
      infoFilms.Horror,
      infoFilms.Documentary,
      infoFilms.Adventure,
   ]);

   const submitHandler = (e) => {
      e.preventDefault();
      const filmTitle = e.target.id;
      console.log(filmTitle);
      navigate(`/multimedia-play`);
      setTitle(filmTitle);
   };

   return (
      <React.Fragment>
         <h1 className="header">{cards}</h1>
         {films.map((film) => {
            return (
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <main className="page-content_cont">
                           <div
                              className="card_cont"
                              style={{
                                 backgroundImage: `url(${film.urlImg})`,
                                 backgroundSize: "auto",
                                 backgroundRepeat: "no-repeat",
                              }}
                           >
                              <div className="content_cont">
                                 <h2 className="title_cont">{film.title}</h2>
                                 <p className="copy_cont">{film.description}</p>
                                 <button
                                    id={film.title}
                                    onClick={submitHandler}
                                    className="btn_cont"
                                 >
                                    View short
                                 </button>
                              </div>
                           </div>
                        </main>
                     </div>
                  </div>
               </div>
            );
         })}
      </React.Fragment>
   );
};

export default ContentCategory;
