import React from "react";
import "../Assets/Styles/new-releases.css";
import NewReleases from "./NewReleases";

function NewReleasesSection (){
    return(
        <section className="new-articles-section">
            <h3>Nuevos artículos</h3>
            <div className="component-box">
                <NewReleases/>
            </div>
            
        </section>
    )
}

export default NewReleasesSection;