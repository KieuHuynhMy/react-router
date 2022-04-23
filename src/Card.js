import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Card = () => {
  const { user } = useParams();
  // const { userUpdate, setUserUpdate } = useEffect();
  // setUserUpdate({})
  return (
    <div
      className="ui raised very padded container text segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{user}</h3>
    </div>
  );
};
export default Card;
