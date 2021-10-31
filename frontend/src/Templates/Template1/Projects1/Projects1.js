import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://dummyimage.com/721x401"
          alt="content"
        />
        <h3
          className={`tracking-widest text-${props.theme}-500 text-xs font-medium title-font`}
        >
          SUBTITLE
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          Colosseum Roma
        </h2>
        <p className="leading-relaxed text-base">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche.
        </p>
      </div>
    </div>
  );
};

function Projects1(props) {
  return (
    <section className="text-gray-600 body-font mr-20 ml-20">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="font-medium title-font mb-2 text-gray-900">Projects</h1>
        <div className="flex flex-wrap -m-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

Projects1.defaultProps = {
  theme: "indigo",
};

Projects1.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Projects1;
