import React from "react";
import "./herocomponent.css";
// import { Box, Container, Typography } from "@mui/material";
import Headphone from "./qtify_heroSection.png";

export default () => {
  return (
    <div className="hs-content">
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div className="hs-img-frame">
        <img src={Headphone} className="hs-img" alt="headphone-img" />
      </div>
    </div>
  );
};
