import React from "react";
import data from "../Api/data.json";
import "../Assets/Styles/CardArticle.css";
import { NavLink } from 'react-router-dom';

const AuthorCard = ({params}) =>{
    return(
        data.filter(item => item.author === `${params.id}`).map((data, index) => {
            return(
                <div className="container" key={index}>
                    <img className="cardImg" src={data.img} alt="Img" />
                    <div className="cardContainer">
                    <span className="spanAuthor"><img className="avatar" src={data.authorImg} alt="avatar" />{data.author}</span>
                        <NavLink to={`/article/${index}`} ><h5 className="articleTitle">{data.title}</h5></NavLink>
                        <p className="articleDescription">{data.description.slice(0,200)} ...</p>
                        <p className="articleDateParagraph"> Fecha de publicación: <span className="articleDate">{data.date}</span></p>
                    </div>
                </div>
            )
        })
    )
}

export default AuthorCard;