import React from "react";
import Link from "next/link";
import Image from "next/image";

const ShortButtons = ({ title, text, icon, link }) => {
  return (
    <>
      <Link href={`${link}`}>
        <div className="container">
          <h4 className="title">{title}</h4>
          {icon && icon}

          <p className="text">{text}</p>
        </div>
      </Link>
      <style jsx>
        {`
          .container {
            width: 12rem;
            height: 12rem;
            border-radius: 15px;
            display: grid;
            place-items: center;

            transition: 0.2s;
            transition: background 0.3s, color 0.3s;
            background: linear-gradient(
              120deg,
              var(--primary) 50%,
              var(--secondary) 50%
            );
            background-size: 255%;
          }
          .container:hover {
            cursor: pointer;
            background-position: 100%;
          }
          .title {
            color: var(--text);
            font-weight: 300;
          }
          .text {
            color: var(--text);
            font-weight: 300;
          }
        `}
      </style>
    </>
  );
};

export default ShortButtons;
