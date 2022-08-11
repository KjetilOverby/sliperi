import React from "react";
import Image from "next/image";

const ToolsOverviewCard = ({ img, title, ant, antVr, antNy }) => {
  return (
    <>
      <div className="container">
        <div className="img-container">
          <Image src={img} />
        </div>
        <div>
          <h4>{title}</h4>
          <p>Antall: {ant}</p>
          <p>Antall vrak: {antVr}</p>
          <p>Antall nye{antNy}</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            padding: 1rem;
            background-image: linear-gradient(
              to right,
              #fa709a 0%,
              #fee140 100%
            );
          }
          .img-container {
            width: 8rem;
            margin-right: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default ToolsOverviewCard;
