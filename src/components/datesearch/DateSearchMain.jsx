import React, { useState, useEffect } from "react";
import DatePicker from "./DatePicker";
import DatePickerListComponent from "./DatePickerListComponent";

const DateSearchMain = ({
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  datePickerWaste,
  datePickerNew,
  datePickerService,
  updateDatePicker,
  commentsByDate,
}) => {
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

  const [wasteCount, setWasteCount] = useState();
  const [wasteCountSum, setWasteCountSum] = useState();

  const [newCount, setNewCount] = useState();
  const [newCountSum, setNewCountSum] = useState();

  const [serviceCount, setServiceCount] = useState();
  const [serviceCountSum, setServiceCountSum] = useState();

  useEffect(() => {
    if (datePickerWaste && datePickerNew && datePickerService) {
      setNewCount(datePickerNew && datePickerNew.map((item) => item.typeCount));
      setWasteCount(
        datePickerWaste && datePickerWaste.map((item) => item.typeCount)
      );
      setServiceCount(
        datePickerService && datePickerService.map((item) => item.typeCount)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateDatePicker]);

  useEffect(() => {
    if (wasteCount && newCount && serviceCount) {
      setNewCountSum(
        newCount.reduce(function (a, b) {
          return a + b;
        }, 0)
      );
      setWasteCountSum(
        wasteCount.reduce(function (a, b) {
          return a + b;
        }, 0)
      );
      setServiceCountSum(
        serviceCount.reduce(function (a, b) {
          return a + b;
        }, 0)
      );
    }
  }, [wasteCount, newCount, serviceCount]);

  console.log(datePickerWaste);
  console.log(datePickerService);
  console.log(datePickerNew);

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
        <div className="month-container mt">
          <div>
            {startDate && (
              <p className="duration-text">{`${
                startDate && startDate._d.getDate()
              } ${monthConvert} ${startDate && startDate._d.getFullYear()}`}</p>
            )}
          </div>
          {diffDays !== NaN && diffDays > 1 && (
            <p className="duration-text">-</p>
          )}
          <div>
            {endDate && (
              <p className="duration-text">{`${
                endDate && endDate._d.getDate()
              } ${monthConvert2} ${endDate && endDate._d.getFullYear()}`}</p>
            )}
          </div>
          {diffDays !== NaN && diffDays > 1 && diffDays < 1000 && (
            <p className="duration-text"> ({diffDays} dager)</p>
          )}
        </div>

        <div>
          <h4 className="mt count-text">Antall vrak: {wasteCountSum}</h4>
          <hr />
          <DatePickerListComponent data={datePickerWaste} />

          <h4 className="mt count-text">Antall nye: {newCountSum}</h4>
          <hr />
          <DatePickerListComponent data={datePickerNew} />

          <h4 className="mt count-text">Antall service: {serviceCountSum}</h4>
          <hr />
          <DatePickerListComponent data={datePickerService} />

          <h4 className="mt count-text">
            Kommentarer: {commentsByDate && commentsByDate.length}
          </h4>
          <hr />
          {commentsByDate &&
            commentsByDate.map((item) => {
              return (
                <div key={item.comment} className="comment-container">
                  <p>
                    {item.serial} {item.type}
                  </p>
                  <p>{item.comment.map((com) => com)}</p>
                  <p>{item.commentDate.map((comd) => comd)}</p>
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .calendar-text {
            color: var(--text);
            font-style: italic;
          }
          .container {
          }
          .count-text {
            color: var(--middle);
          }
          .comment-container {
            padding: 1rem;
          }
          .date-picker-container {
            background-image: linear-gradient(
              120deg,
              var(--primary) 0%,
              var(--text) 100%
            );
            padding: 2rem;
            border-radius: 10px;
          }
          .duration-text {
            color: var(--primary);
          }
          .month-container {
            display: flex;
            color: darkblue;
            font-size: 1.2rem;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
};

export default DateSearchMain;
