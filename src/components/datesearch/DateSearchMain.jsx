import React from "react";
import DatePicker from "./DatePicker";

const DateSearchMain = ({ setStartDate, startDate, setEndDate, endDate }) => {
  return (
    <>
      <div className="content-container">
        <DatePicker
          setStartDate={setStartDate}
          startDate={startDate}
          setEndDate={setEndDate}
          endDate={endDate}
        />
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

export default DateSearchMain;
