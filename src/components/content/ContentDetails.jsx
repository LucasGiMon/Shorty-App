import React, { useEffect, useState } from "react";
import filmsInfo from "../../data/filmsInfo.json";

const ContentDetails = ({ title, category }) => {
   const [filmTitle] = useState(title);
   const [filmCategory] = useState(category);
   const [filmArr, setFilmArr] = useState([]);

   const newFilms = filmsInfo;
   console.log(filmTitle, filmCategory, filmArr);

   useEffect(() => {
      if (filmCategory === "Horror") {
         const categoryChanger = newFilms.Horror;
         for (let i = 0; i < categoryChanger.length; i++) {
            const eachFilm = categoryChanger[i];
            if (eachFilm.title === filmTitle) {
               setFilmArr(eachFilm);
            }
         }
      }
      if (filmCategory === "Comedy") {
         const categoryChanger = newFilms.Comedy;
         for (let i = 0; i < categoryChanger.length; i++) {
            const eachFilm = categoryChanger[i];
            if (eachFilm.title === filmTitle) {
               setFilmArr(eachFilm);
            }
         }
      }
      if (filmCategory === "Adventure") {
         const categoryChanger = newFilms.Adventure;
         for (let i = 0; i < categoryChanger.length; i++) {
            const eachFilm = categoryChanger[i];
            if (eachFilm.title === filmTitle) {
               setFilmArr(eachFilm);
            }
         }
      }
      if (filmCategory === "Documentary") {
         const categoryChanger = newFilms.Documentary;
         for (let i = 0; i < categoryChanger.length; i++) {
            const eachFilm = categoryChanger[i];
            if (eachFilm.title === filmTitle) {
               setFilmArr(eachFilm);
            }
         }
      }
      // const objectFilm = filmArr.filter((each)=>(each.title === filmTitle))
      // setFilmObj(objectFilm[0])
   }, [
      filmCategory,
      newFilms.Horror,
      filmArr,
      filmTitle,
      newFilms.Comedy,
      newFilms.Adventure,
      newFilms.Documentary,
   ]);
   console.log("filmArr=>", filmArr);

   return (
      <React.Fragment>
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="page-content_multi">
                     <h1 className="header3">{filmArr.title}</h1>
                     <iframe
                        width="100%"
                        height="500px"
                        src={filmArr.url}
                        title={filmArr.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                     ></iframe>
                     <div className="container">
                        <div className="row">
                           <div className="col">
                              <h3 className="header2">{filmArr.description}</h3>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default ContentDetails;
