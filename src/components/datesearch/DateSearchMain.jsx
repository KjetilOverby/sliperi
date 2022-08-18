import React, { useState, useEffect } from "react";
import DatePicker from "./DatePicker";

const DateSearchMain = ({ setStartDate, startDate, setEndDate, endDate }) => {
  const [monthConvert, setMonthConvert] = useState();
  const [monthConvert2, setMonthConvert2] = useState();

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay) + 1);

  useEffect(() => {
    if (startDate && startDate._d.getMonth() === 0) {
      setMonthConvert("januar");
    } else if (startDate && startDate._d.getMonth() === 1) {
      setMonthConvert("februar");
    } else if (startDate && startDate._d.getMonth() === 2) {
      setMonthConvert("mars");
    } else if (startDate && startDate._d.getMonth() === 3) {
      setMonthConvert("april");
    } else if (startDate && startDate._d.getMonth() === 4) {
      setMonthConvert("mai");
    } else if (startDate && startDate._d.getMonth() === 5) {
      setMonthConvert("juni");
    } else if (startDate && startDate._d.getMonth() === 6) {
      setMonthConvert("juli");
    } else if (startDate && startDate._d.getMonth() === 7) {
      setMonthConvert("august");
    } else if (startDate && startDate._d.getMonth() === 8) {
      setMonthConvert("september");
    } else if (startDate && startDate._d.getMonth() === 9) {
      setMonthConvert("oktober");
    } else if (startDate && startDate._d.getMonth() === 10) {
      setMonthConvert("november");
    } else if (startDate && startDate._d.getMonth() === 11) {
      setMonthConvert("desember");
    }
  }, [startDate]);

  useEffect(() => {
    if (endDate && endDate._d.getMonth() === 0) {
      setMonthConvert2("januar");
    } else if (endDate && endDate._d.getMonth() === 1) {
      setMonthConvert2("februar");
    } else if (endDate && endDate._d.getMonth() === 2) {
      setMonthConvert2("mars");
    } else if (endDate && endDate._d.getMonth() === 3) {
      setMonthConvert2("april");
    } else if (endDate && endDate._d.getMonth() === 4) {
      setMonthConvert2("mai");
    } else if (endDate && endDate._d.getMonth() === 5) {
      setMonthConvert2("juni");
    } else if (endDate && endDate._d.getMonth() === 6) {
      setMonthConvert2("juli");
    } else if (endDate && endDate._d.getMonth() === 7) {
      setMonthConvert2("august");
    } else if (endDate && endDate._d.getMonth() === 8) {
      setMonthConvert2("september");
    } else if (endDate && endDate._d.getMonth() === 9) {
      setMonthConvert2("oktober");
    } else if (endDate && endDate._d.getMonth() === 10) {
      setMonthConvert2("november");
    } else if (endDate && endDate._d.getMonth() === 11) {
      setMonthConvert2("desember");
    }
  }, [endDate]);
  return (
    <>
      <div className="content-container">
        <h1 className="header mb">Søk på dato</h1>
        <div className="date-picker-container">
          <DatePicker
            setStartDate={setStartDate}
            startDate={startDate}
            setEndDate={setEndDate}
            endDate={endDate}
          />
          <p className="mt calendar-text">
            Klikk på Start Date og velg en periode i kalenderen.
          </p>
        </div>
        {startDate && (
          <p>{`${startDate && startDate._d.getDate()} ${monthConvert} ${
            startDate && startDate._d.getFullYear()
          }`}</p>
        )}

        {endDate && (
          <p>{`${endDate && endDate._d.getDate()} ${monthConvert2} ${
            endDate && endDate._d.getFullYear()
          }`}</p>
        )}
        <p>{diffDays} dager</p>
      </div>
      <style jsx>
        {`
          .calendar-text {
            color: #69949e;
            font-style: italic;
          }
          .container {
          }
          .date-picker-container {
            background-image: linear-gradient(120deg, #79c5fc 0%, #95ef3b 100%);
            padding: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default DateSearchMain;
