import React, { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import { useMediaQuery } from "react-responsive";

const DatePicker = ({ setStartDate, startDate, setEndDate, endDate }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  return (
    <>
      <div className="container">
        <DateRangePicker
          startDate={startDate}
          startDateId="tata-start-date"
          endDate={endDate}
          endDateId="tata-end-date"
          onDatesChange={handleDatesChange}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
          isOutsideRange={() => false}
          withPortal={true}
          readOnly={true}
          numberOfMonths={isMobile ? 1 : 4}
          withFullScreenPortal={false}
          showClearDates={true}
          showDefaultInputIcon={true}
          noBorder={true}
          startDatePlaceholderText="Startdato"
          endDatePlaceholderText="Sluttdato"
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

export default DatePicker;
