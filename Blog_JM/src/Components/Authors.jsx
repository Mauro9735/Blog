import React from "react";
import data from "../Api/data.json";
import "../Assets/Styles/authors.css";

function Authors(){
    //SlicedData is a function that brings only the first 5 elements of an array.
    const slicedData = data.slice(0, 5);
    return(
        slicedData.map((data, index) => {
            return(
                <div className="author-container" key={index}>
                    <img className="avatar" src={data.authorImg} alt="avatar" />
                    <p>{data.author}</p>
                </div>
            )
        })
    )
};

export default Authors;