import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  setTimeout(() => navigate("/about"), 2000);
  return (
    <div
      className="ui raised very padded container text segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">Home</h3>
      <p>Lorem ipsum</p>
    </div>
  );
};
export default Home;
