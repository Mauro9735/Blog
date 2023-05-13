import React from "react";
import "../assets/Styles/categories.css";
import categories from "../Api/categories.json"

function Categories () {
    return(
        categories.map((data, i) => {
            return (
                <a className="tags"  key={i}>
                    {data.name}
                </a>
            )
        })
    )
}

export default Categories;