import React from "react";
import TopicsList from "../Components/TopicsList";
import TopicsAuthors from "../Components/TopicsAuthors";
import NewReleasesSection from "../Components/NewReleasesSection";
import CardSection from "../Components/CardSection";
import "../styles.css"

function Home() {
    return(
        <>
            <NewReleasesSection />
            <div className="categories-card-div">
                <TopicsAuthors />
                <CardSection />
            </div>
           
        </>
        
    )
};

export default Home;
