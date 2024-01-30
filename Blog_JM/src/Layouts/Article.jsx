import React from "react";
import { useParams } from "react-router-dom";
import data from "../Api/data.json";
import "../Assets/Styles/article.css";

function Article(){
    const params = useParams();
    let article = data[params.id];
    return(
        <div className="article-container">
            <h1>{article.title}</h1>
            <p className="subtitle">{article.description}</p>
            <div className="author-box">
                <img className="article-avatar" src={article.authorImg}/>
                <div className="name-date">
                    <p className="author-name">{article.author}</p>
                    <p className="author-name">{article.date}</p>
                </div>
            </div>
            <p className="article-content">{article.content}</p>
        </div>
    )
}

export default Article;