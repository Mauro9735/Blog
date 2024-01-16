import React from "react";
import "../assets/Styles/topics.css";
import categories from "../Api/categories.json"

function Topics () {
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

export default Topics;