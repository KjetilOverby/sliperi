import React from "react";
import Link from "next/link";

const ShortButtons = ({ title, text, icon, link }) => {
  return (
    <>
      <Link href={`${link}`}>
        <div className="container">
          <h4 className="title">{title}</h4>
          {icon}
          <p className="text">{text}</p>
        </div>
      </Link>
      <style jsx>
        {`
          .container {
            width: 10rem;
            height: 10rem;
            border: 1px solid lightslategrey;
            border-radius: 15px;
            display: grid;
            place-items: center;
            border-color: #7c7c7c;
            background: linear-gradient(
              top,
              rgba(38, 38, 38, 0.8),
              #e6e6e6 25%,
              #ffffff 38%,
              #c5c5c5 63%,
              #f7f7f7 87%,
              rgba(38, 38, 38, 0.8)
            );
            background: -webkit-linear-gradient(
              top,
              rgba(38, 38, 38, 0.5),
              #e6e6e6 25%,
              #ffffff 38%,
              rgba(0, 0, 0, 0.25) 63%,
              #e6e6e6 87%,
              rgba(38, 38, 38, 0.4)
            );
            transition: 0.2s;
          }
          .container:hover {
            box-shadow: 5px 5px 10px grey;
            cursor: pointer;
          }
          .title {
            color: #385668;
            font-weight: 300;
          }
          .text {
            color: #385668;
            font-weight: 300;
          }
        `}
      </style>
    </>
  );
};

export default ShortButtons;
