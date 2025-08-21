import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Layouts/Home";
import Article from "./Layouts/Article";
import CreateArticle from "./Layouts/CreateArticle";
import EditArticle from "./Layouts/EditArticle";
import TopicLayout from "./Layouts/TopicLayout";
import Footer from "./Components/footer";
import AuthorLayout from "./Layouts/AuthorLayout";

function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/article/:id" element={<Article />}/>
        <Route path="/create-article" element={<CreateArticle />}/>
        <Route path="/edit-article" element={<EditArticle />}/>
        <Route path="/topics/:id" element={<TopicLayout />}/>
        <Route path="/authors/:id" element={<AuthorLayout />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
      <Footer />
    </>
  )
  
}

export default App;
