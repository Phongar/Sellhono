import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import SingleServices from "./Pages/SingleServices";
import Price from "./Pages/PricingPlan";
import OurProject from "./Pages/OurProject";

import ProjectDetails from "./Pages/ProjectDeatils";
import ArticlesNews from "./Pages/ArticlesNews";

import BlogDeatils from "./Pages/BlogDetails";

import Team from "./Pages/Team";

import TeamSingle from "./Pages/TeamSingle";

import Contact from "./Pages/Contact";

import FAQS from "./Pages/FAQ`s";

import NotFound from "./Pages/NotFound";

import "./styles/reset.css"
import "./styles/main.css"


function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />

      <Routes>
        <Route path="/Home" element={ <Home /> } />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/singleservices" element={<SingleServices />} />
        <Route path="/pricingplan" element={<Price />} />
        <Route path="/ourproject" element={<OurProject />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
        <Route path="/articles and news" element={<ArticlesNews />} />
        <Route path="/BlogDetails" element={<BlogDeatils />} />
        <Route path="/team" element={<Team />} />
        <Route path="/teamsingle" element={<TeamSingle />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/Pages" element={<NotFound />} /> 
      </Routes>

      </Router>  
    </div>
  );
}

export default App;
