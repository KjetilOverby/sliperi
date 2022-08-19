import React from "react";
import dateFormat, { masks } from "dateformat";

const DatePickerListComponent = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="container">
        <h4 className="mb">Antall vrak: {data.length}</h4>
        <div>
          {data &&
            data.map((item) => {
              return (
                <div key={item._id} className="list-container">
                  <p className="serial">{item.serial}</p>
                  <p className="retip">Oml: {item.wasteNumberOfRetip}, </p>
                  <p className="date">
                    {" "}
                    d: {dateFormat(item.wasteDate, "dd.mm.yyyy")}
                  </p>
                  <p className="type">{item.type}</p>
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin-top: 2rem;
          }
          .date {
            margin-right: 0.5rem;
          }
          .list-container {
            display: flex;
          }
          .retip {
            margin-right: 0.5rem;
          }
          .serial {
            width: 5rem;
          }
          .type {
            margin-right: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default DatePickerListComponent;
