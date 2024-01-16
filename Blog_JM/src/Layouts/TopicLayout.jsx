import React from "react";
import CardSection from "../Components/CardSection";
import TopicsAuthors from "../Components/TopicsAuthors";
import "../Assets/Styles/topic-layout.css";

function TopicLayout(){
    return(
        <section className="topic-layout">
            <section className="categories">
                <h1>Deportes</h1>
                <div className="buttons">
                    <button className="follow-write-button">Seguir</button>
                    <button className="follow-write-button">Escribir</button>
                </div>

                <div>
                    <CardSection />
                </div>
            </section>
            <section className="topics-authors">
                <TopicsAuthors />
            </section>
        </section>
        
    )
};

export default TopicLayout;