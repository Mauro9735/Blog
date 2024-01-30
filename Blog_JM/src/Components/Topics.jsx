import React from "react";
import Data from "../Api/data.json";
import "../assets/Styles/topics.css";
import { NavLink } from 'react-router-dom';

function Topics () {

    //create an array that will contain all of the topics
    let listOfTopics = [];

    //through this map method I am pushing all of the topics to the empty array.
    Data.map((data) => {
        listOfTopics.push(data.category);
    })

    //Here I am creating a variable that filters out the repeated topics, and stores them in the variable
    const uniqueTopics = listOfTopics.filter((topic, index, array)=>{
        return array.indexOf(topic) === index;
    })

    return(
        uniqueTopics.map((topics, i) => {
            return (
                <NavLink to={`/topics/${topics}`}><a className="tags"  key={i}>
                    {topics}
                </a></NavLink>
            )
        })
    )
}

export default Topics;