import React from "react";
import Link from "next/link";
const ButtonComponent = ({
  title,
  func,
  ml,
  type,
  link,
  bg,
  bgh,
  color,
  colorh,
  bc,
}) => {
  return (
    <>
      {!link && (
        <button onClick={func} className={`container ${type} `}>
          {title}
        </button>
      )}
      {link && (
        <Link href={`${link}`}>
          <button className={`container ${type} `}>{title}</button>
        </Link>
      )}
      <style jsx>{`
        .container {
          background: dodgerblue;
          min-width: 10rem;
          height: 2.5rem;
          padding: 0.5rem;
          border: none;
          border-radius: 5px;
          color: white;
          transition: background 0.5s, color 0.5s;
          text-transform: uppercase;
          margin: 1rem 1rem 1rem 0;
          margin-left: ${ml};
          grid-area: btn;
        }
        .container:hover {
          background: #1973cc;
          cursor: pointer;
        }
        .outline {
          border: 1px solid #1973cc;
          background: transparent;
          color: #1973cc;
        }
        .outline:hover {
          background: #1973cc47;
        }
        .red-outline {
          border: 1px solid #cc2519;
          background: transparent;
          color: #cc2519;
        }
        .red-outline:hover {
          background: #cc25193b;
        }
        .red {
          background: #cc2519;
        }
        .red:hover {
          background: #b11f15;
        }
        .custom-bg {
          background: ${bg};
          color: ${color};
        }
        .custom-bg:hover {
          background: ${bgh};
          color: ${colorh};
        }
        .custom-outline {
          border: 1px solid ${bc};
          background: transparent;
          color: ${bc};
        }
        .custom-outline:hover {
          background: ${bgh};
        }
      `}</style>
    </>
  );
};
export default ButtonComponent;
