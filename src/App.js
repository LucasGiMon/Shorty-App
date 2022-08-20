import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Starter from "./components/Starter";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import NavbarShorty from "./layouts/NavbarShorty";
import ContentCategory from "./components/content/ContentCategory";
import ContentDetails from "./components/content/ContentDetails";

function App() {
   const [user, setUser] = useState({ name: "", email: "", password: "" });
   const [filter, setFilter] = useState("");
   const [title, setTitle] = useState("");

   const Logout = () => {
      console.log("Logout");
      setUser({ name: "", email: "", password: "" });
   };
   console.log(title);

   return (
      <>
         <div className="App">
            <Router>
               <NavbarShorty />
               <Routes>
                  <Route path="/" element={<Starter />} />
                  <Route path="/form" element={<LoginForm User={setUser} />} />
                  <Route
                     path="/welcome"
                     element={<Welcome Logout={Logout} User={user.name} />}
                  />
                  <Route path="/home" element={<Home idFilter={setFilter} />} />
                  <Route
                     path="/category-multimedia"
                     element={
                        <ContentCategory filterCat={filter} setTitle={setTitle} />
                     }
                  />
                  <Route
                     path={`/multimedia-play`}
                     element={<ContentDetails title={title} category={filter} />}
                  />
               </Routes>
            </Router>
         </div>
      </>
   );
}

export default App;
