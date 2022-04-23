import React, { Component } from "react";
import {Link, NavLink} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="ui raised very padded segment">
        <a className="ui teal inverted segment">Brand</a>
        <div className="ui right floated header">
          <button className="ui button">
            <Link to="/">Home</Link>
          </button>
          <button className="ui button">
            <NavLink to="/about">About</NavLink>
          </button>
          <button className="ui button">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </nav>
    );
  }
}
