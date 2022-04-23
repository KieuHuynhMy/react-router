import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";

const Contact = (props) => {
  return (
    <div>
      <Modal />
      <div
        className="ui raised very padded container text segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/dany" className="ui header">
          Dany
        </Link>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div
        className="ui raised very padded container text segment"
        style={{ marginTop: "80px" }}
      >
        <NavLink to="/tom" className="ui header">
          Tom
        </NavLink>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};
export default Contact;
