import React from "react";
import Topics from "./Topics";
import "../assets/Styles/topics.css";

function TopicsList(){

    return(
        <section className="category-section">
            <h3>Categorías</h3>
            <div className="tags-box">
                <Topics />
            </div>
            
        </section>
    )
};

export default TopicsList;