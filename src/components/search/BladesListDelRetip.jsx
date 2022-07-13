import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";

const BladesListDelRetip = () => {
  const { linckBladesDeleted } = useContext(MyContext);
  return (
    <>
      <div className="container">
        {linckBladesDeleted && linckBladesDeleted.map((waste) => waste.serial)}
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default BladesListDelRetip;
