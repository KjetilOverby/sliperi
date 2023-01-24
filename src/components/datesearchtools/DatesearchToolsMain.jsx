import React, { useState, useEffect } from "react";
import DatePicker from "../datesearch/DatePicker";

const DatesearchToolsMain = ({
  setStartDate,
  startDate,
  setEndDate,
  endDate,
  datePickerWaste,
  datePickerNew,
  datePickerService,
  redSegmentH,
  redSegmentV,
  vpp34SegH,
  vpp34SegV,
  vp34SegH,
  vp34SegV,
  vp48segH,
  vp48segV,
  reduserKniv,
  vpp34Kniv,
  vp34Kniv,
  vp48Kniv,
  bruksKniv,
  redSegmentHNew,
  redSegmentVNew,
  vpp34SegHNew,
  vpp34SegVNew,
  vp34SegHNew,
  vp34SegVNew,
  vp48segHNew,
  vp48segVNew,
  reduserKnivNew,
  vpp34KnivNew,
  vp34KnivNew,
  vp48KnivNew,
  bruksKnivNew,
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

  console.log(redSegmentV);
  return (
    <>
      <div className="content-container main-container">
        <h1 className="header mb search-header">
          Søk på dato i kniver og segmenter
        </h1>
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
        <div></div>
        <div></div>
        <h4 className="mb">Antall vrak:</h4>
        <div>
          {redSegmentH > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(redSegmentH)}</span> Reduserer
              segment høyre
            </p>
          )}
          {redSegmentV > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(redSegmentV)}</span> Reduserer
              segment venstre
            </p>
          )}
          {vpp34SegH > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vpp34SegH)}</span> Fres 1/4
              segment høyre
            </p>
          )}
          {vpp34SegV > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vpp34SegV)}</span> Fres 1/4
              segment venstre
            </p>
          )}
          {vp34SegH > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp34SegH)}</span> Fres 2 segment
              høyre
            </p>
          )}
          {vp34SegV > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp34SegV)}</span> Fres 2 segment
              venstre
            </p>
          )}
          {vp48segH > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp48segH)}</span> Fres 3 segment
              høyre
            </p>
          )}
          {vp48segV > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp48segV)}</span> Fres 3 segment
              venstre
            </p>
          )}
          {reduserKniv > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(reduserKniv)}</span> Reduserer
              kniv
            </p>
          )}
          {vpp34Kniv > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vpp34Kniv)}</span> Fres 1/4 kniv
            </p>
          )}
          {vp34Kniv > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp34Kniv)}</span> Fres 2/3 kniv
            </p>
          )}
          {vp48Kniv > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp48Kniv)}</span> Fres 3 kniv
            </p>
          )}
          {bruksKniv > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(bruksKniv)}</span>
              Hugger/stikkhugger kniv
            </p>
          )}
        </div>
        <h4 className="mb mt">Antall nye:</h4>
        <div>
          {redSegmentHNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(redSegmentHNew)}</span> Reduserer
              segment høyre
            </p>
          )}
          {redSegmentVNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(redSegmentVNew)}</span> Reduserer
              segment venstre
            </p>
          )}
          {vpp34SegHNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vpp34SegHNew)}</span> Fres 1/4
              segment høyre
            </p>
          )}
          {vpp34SegVNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vpp34SegVNew)}</span> Fres 1/4
              segment venstre
            </p>
          )}
          {vp34SegHNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp34SegHNew)}</span> Fres 2
              segment høyre
            </p>
          )}
          {vp34SegVNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp34SegVNew)}</span> Fres 2
              segment venstre
            </p>
          )}
          {vp48segHNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp48segHNew)}</span> Fres 3
              segment høyre
            </p>
          )}
          {vp48segVNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp48segVNew)}</span> Fres 3
              segment venstre
            </p>
          )}
          {reduserKnivNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(reduserKnivNew)}</span> Reduserer
              kniv
            </p>
          )}
          {vpp34KnivNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vpp34KnivNew)}</span> Fres 1/4
              kniv
            </p>
          )}
          {vp34KnivNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp34KnivNew)}</span> Fres 2/3
              kniv
            </p>
          )}
          {vp48KnivNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(vp48KnivNew)}</span> Fres 3 kniv
            </p>
          )}
          {bruksKnivNew > 0 && (
            <p className="blade-container">
              <span className="span">{Math.abs(bruksKnivNew)}</span>
              Hugger/stikkhugger kniv
            </p>
          )}
        </div>
      </div>

      <style jsx>
        {`
          .container {
          }
          .date-picker-container {
            background-image: linear-gradient(
              to right,
              var(--secondary) 0%,
              var(--secondary) 0%
            );
            padding: 2rem;
            margin-bottom: 3rem;
            border-radius: 10px;
          }
          .main-container {
            background: var(--secondary);
            color: var(--middle);
          }
          .span {
            width: 2rem;
          }
          .search-header {
            color: var(--middle);
          }
        `}
      </style>
    </>
  );
};

export default DatesearchToolsMain;
