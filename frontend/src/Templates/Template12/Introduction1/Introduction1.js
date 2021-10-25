import React from "react";
import "./Introduction1.css";
import logo from "./img/about-us.png";

export const Introduction1 = () => {
  return (
    <div id="introduction-1">
      <div id="left-introduction-1">
        <img src={logo} alt="No Image" />
      </div>
      <div id="right-introduction-1">
        <h1>My Introduction</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut aliquam
          odio maxime. Ea animi facere, vero molestiae perferendis dolores
          architecto facilis qui cupiditate eum nostrum repudiandae quos
          voluptatum natus? Necessitatibus dolore hic quisquam doloribus
          mollitia saepe asperiores quas praesentium, vel animi est optio ad
          ratione quis unde quibusdam iure atque soluta dignissimos porro
          repellendus ut! Distinctio, vitae! Qui dolorem error quasi enim neque
          blanditiis.
        </p>
      </div>
    </div>
  );
};
