import React from "react";
import "./Services1.css";

const Card = () => {
    return (
        <div id="servicesCard-1">
            {/* <img src="" alt="No-img" /> */}
            <h1><i class="fas fa-archway"></i></h1>
            <h2>Web Developer</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi quod
            nisi optio? Et minus atque ab, maiores saepe assumenda quis?
            </p>
        </div>
    );
};

export const Services1 = () => {
  return (
    <div id="services1">
      <h1>Services Offers</h1>
      <div id="services-grid">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
