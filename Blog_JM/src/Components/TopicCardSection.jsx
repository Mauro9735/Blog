import React from "react";
import TopicCard from "./TopicCard";
import "../Assets/Styles/CardArticle.css";



function CardSection({params}) {
  return (
        <section className="card-section">
          <div className="overflowed-box">
            <TopicCard params={params}/>
          </div>
        </section>
      )
}

export default CardSection;