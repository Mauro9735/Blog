import React from "react";
import CategoriesList from "../Components/CategoriesList";
import NewReleasesSection from "../Components/NewReleasesSection";
import CardSection from "../Components/CardSection";
import "../styles.css"

function Home() {
    return(
        <>
            <NewReleasesSection />
            <div className="categories-card-div">
                <CategoriesList />
                <CardSection />
            </div>
           
        </>
        
    )
};

export default Home;