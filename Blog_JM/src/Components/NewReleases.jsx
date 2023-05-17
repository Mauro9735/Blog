import React from "react";
import data from "../Api/data.json";
import "../Assets/Styles/new-releases.css";

function NewReleases(){
    const lastSixResults = data.slice(-6);
    return(
        lastSixResults.map((data, i) => {
            return(
                <article className="new-releases-box" key={i}>
                    <img className="avatar2" src={data.authorImg} alt="avatar"  />
                    <div className="author-title-name">
                        <p className="author-name">{data.author}</p>
                        <h4>{data.title}</h4>
                        <p className="article-date"><span>{data.date}</span></p>
                    </div>
                </article>
            )
        })
            
    )
};

export default NewReleases;