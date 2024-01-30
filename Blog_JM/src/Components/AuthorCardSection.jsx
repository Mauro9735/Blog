import React from "react";
import AuthorCard from "./AuthorCard";
import "../Assets/Styles/CardArticle.css";



function AuthorCardSection({params}) {
  return (
        <section className="card-section">
          <div className="overflowed-box">
            <AuthorCard params={params}/>
          </div>
        </section>
      )
}

export default AuthorCardSection;