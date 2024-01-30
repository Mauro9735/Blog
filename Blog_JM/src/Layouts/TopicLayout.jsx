import React from "react";
import TopicCardSection from "../Components/TopicCardSection";
import TopicsAuthors from "../Components/TopicsAuthors";
import { useParams } from "react-router-dom";
import data from "../Api/data.json";
import "../Assets/Styles/topic-layout.css";


/*
I need to create a system that goes like this:

-Make a filter in the home page that puts all of the available topics and filters out repeated topics. -DONE
-when you click into the topic, it takes you to the TopicLayout. -DONE
-inside of the topic layout, depending on what I clicked, the system filters out the news that have that same topic from the ones 
that don't. -DONE
*/


function TopicLayout(){
    const params = useParams();
    return(
        <section className="topic-layout">
            <section className="categories">
                <h1>{params.id}</h1>
                <div className="buttons">
                    <button className="follow-write-button">Seguir</button>
                    <button className="follow-write-button">Escribir</button>
                </div>

                <div>
                    <TopicCardSection params={params} />
                </div>
            </section>
            <section className="topics-authors">
                <TopicsAuthors />
            </section>
        </section>
        
    )
};

export default TopicLayout;