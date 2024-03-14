import React from "react";
import styled from "styled-components";
import Wrapping from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapping>
      <nav>
        <img src={logo} alt="Jobers Guild" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            the
            <span> seeker's</span> hub
          </h1>
          <p>
            Welcome to the Jobers Guild, Here we provide all kinds of comissions
            for all ranks of Adventurers ranging from S to F rank (For example
            killing the Daimao or finding the lost cat). In the meantime we
            worship our Goddess, Komi sama. All hail Goddess KOMI!!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn login-link">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main=img" />
      </div>
    </Wrapping>
  );
};

export default Landing;
