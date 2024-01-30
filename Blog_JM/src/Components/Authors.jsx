import React from "react";
import data from "../Api/data.json";
import "../Assets/Styles/authors.css";
import { NavLink } from 'react-router-dom';

function Authors(){

    //create an array that will contain all of the authors
    let listOfAuthors = [];

    //SlicedData is a function that stores only the first 5 elements of an array.
    const slicedData = data.slice(0, 5);

    //through this map method I am pushing all of the authors to the empty array.
    slicedData.map((data) => {
        listOfAuthors.push(data.author)
    })

    //Here I am creating a variable that filters out the repeated authors of the listOfAuthors array.
    const uniqueAuthors = listOfAuthors.filter((author, index, array) => {
        return array.indexOf(author) === index;
    })

    return(

        uniqueAuthors.map((author, index) => {
            return(
                <div className="author-container" key={index}>
                    <NavLink to={`/authors/${author}`}><p>{author}</p></NavLink>
                </div>
            )
        })
    )
};

export default Authors;