import React from "react";
import Categories from "./Categories";
import "../assets/Styles/categories.css";

function CategoriesList(){
    return(
        <section className="category-section">
            <h3>Temas</h3>
            <div className="tags-box">
                <Categories />
                <Categories />
                <Categories />
                <Categories />
            </div>
            
        </section>
    )
};

export default CategoriesList;