import React from "react";
import data from "../Api/data.json";
import Card from "./Card";
import "../Assets/Styles/CardArticle.css";



function CardSection() {
  return (
        <section className="card-section">
          <div>
            <Card/>
          </div>
        </section>
      )
}

export default CardSection;