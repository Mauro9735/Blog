import React from "react";
import "../Assets/Styles/topic-layout.css"
import AuthorCardSection from "../Components/AuthorCardSection"
import TopicsAuthors from "../Components/TopicsAuthors";
import { useParams } from "react-router-dom";

function AuthorLayout(){
    const params = useParams();
    return(
        <section className="topic-layout">
            <section className="categories">
                <h1>{params.id}</h1>
                <div className="buttons">
                    <button className="follow-write-button">Seguir</button>
                </div>

                <div>
                    <AuthorCardSection params={params}/>
                </div>
            </section>
            <section className="topics-authors">
                <TopicsAuthors />
            </section>
        </section>
    )
 
};

export default AuthorLayout;