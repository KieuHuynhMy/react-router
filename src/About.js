import React, { Component } from "react";
import "./Modal.css";

const About = () => {
  return (
    <div>
      <div className="modal">
        <div className="model-content">
          <h1>I am a model</h1>
        </div>
      </div>
      <div
        className="ui raised very padded container text segment"
        style={{ marginTop: "80px" }}
      >
        <h3 className="ui header">About</h3>
        <p>Lorem ipsum</p>
      </div>
    </div>
  );
};
export default About;
