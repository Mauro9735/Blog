import React from "react";
import TopicsList from "./TopicsList";
import Authors from "./Authors";
import "../Assets/Styles/authors.css"

function TopicsAuthors(){
    return(
        <section className="section-topics-authors">
            <TopicsList />
            <div className="div-authors">
                <h3>Autores populares</h3>
                <Authors />
            </div>   
        </section>
        
    )
};

export default TopicsAuthors;