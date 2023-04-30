import React from "react";
import "../Assets/Styles/CardArticle.css";

const Card = ({datos}) =>{

    return(
        <div className="container">
            <img className="cardImg" src={datos.img} alt="Img" />
            <div className="cardContainer">
            <span className="spanAuthor"><img className="avatar" src={datos.authorImg} alt="avatar" />{datos.author}</span>
                <h5 className="articleTitle">{datos.title}</h5>
                <p className="articleDescription">{datos.description.slice(0,200)} ...</p>
                <p className="articleDateParagraph"> Fecha de publicación: <span className="articleDate">{datos.date}</span></p>
            </div>
        </div>
    )
}

export default Card;