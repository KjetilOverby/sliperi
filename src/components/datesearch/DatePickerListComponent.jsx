import React from "react";

const DatePickerListComponent = ({ data }) => {
  return (
    <>
      <div className="container">
        <div>
          {data &&
            data.map((item) => {
              return (
                <div key={data._id} className="list-container blade-container">
                  <p className="count">{item.typeCount}</p>
                  <p>{item._id.type}</p>
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

          .list-container {
            display: flex;
          }
          .count {
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
