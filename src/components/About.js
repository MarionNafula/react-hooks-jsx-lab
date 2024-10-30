import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a Web Developer. I enjoy making
        things with React. Here is a picture of me:
      </p>
      <img src={image} alt="I made this" /> 
    </div>
  )
}

export default About;
