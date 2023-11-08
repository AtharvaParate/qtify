import React from "react";
import "./herocomponent.css";
// import { Box, Container, Typography } from "@mui/material";
import Headphone from "./qtify_heroSection.png";

const HeroComponent = () => {
  return (
    <>
      <div className="wrapper">
        <div className="heroImageWrapper">
          <div className="banner">
            <h1>100 Thousand Songs, ad free</h1>
            <h1>Over thousands podcast episodes</h1>
          </div>
          <div>
            <img src={Headphone} alt="Headphone" height="212px" width="212px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
