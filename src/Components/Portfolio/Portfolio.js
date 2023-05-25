import React from "react";
import gameImage from "./gamescreenshot.jpg"

export default function Portfolio(){
    return (
    <div className="page">Portfolio
    <a href="https://github.com/dsenat/gameProject" target="_blank" rel="noopener noreferrer">
        <img src={gameImage} alt="Game Screenshot"/>
    </a>
    </div>
    )
}