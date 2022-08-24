import React, { useState, useEffect } from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";
import DatesearchToolsMain from "../src/components/datesearchtools/DatesearchToolsMain";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

const Datesearchtools = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [datePickerWaste, setDatePickerWaste] = useState();
  const [datePickerNew, setDatePickerNew] = useState();
  const [datePickerService, setDatePickerService] = useState();

  const [redSegmentH, setRedSegmentH] = useState();
  const [redSegmentV, setRedSegmentV] = useState();
  const [vpp34SegH, setVpp34SegH] = useState();
  const [vpp34SegV, setVpp34SegV] = useState();
  const [vp34SegH, setVp34SegH] = useState();
  const [vp34SegV, setVp34SegV] = useState();
  const [vp48segH, setVp48segH] = useState();
  const [vp48segV, setVp48segV] = useState();
  const [reduserKniv, setReduserKniv] = useState();
  const [vpp34Kniv, setVpp34Kniv] = useState();
  const [vp34Kniv, setVp34Kniv] = useState();
  const [vp48Kniv, setVp48Kniv] = useState();
  const [bruksKniv, setBruksKniv] = useState();

  const [getRedSegmentH, setGetRedSegmentH] = useState();
  const [getRedSegmentV, setGetRedSegmentV] = useState();
  const [getVpp34SegH, setGetVpp34SegH] = useState();
  const [getVpp34SegV, setGetVpp34SegV] = useState();
  const [getVp34SegH, setGetVp34SegH] = useState();
  const [getVp34SegV, setGetVp34SegV] = useState();
  const [getVp48SegH, setGetVp48SegH] = useState();
  const [getVp48SegV, setGetVp48SegV] = useState();
  const [getReduserKniv, setgetReduserKniv] = useState();
  const [getVpp34Kniv, setGetVpp34Kniv] = useState();
  const [getVp34Kniv, setGetVp34Kniv] = useState();
  const [getVp48Kniv, setGetVp48Kniv] = useState();
  const [getBruksKniv, setGetBruksKniv] = useState();

  useEffect(() => {
    if (datePickerWaste) {
      setGetRedSegmentH(
        datePickerWaste.filter(
          (item) => item.type === "Reduserer segment høyre"
        )
      );
      setGetRedSegmentV(
        datePickerWaste.filter(
          (item) => item.type === "Reduserer segment venstre"
        )
      );
      setGetVpp34SegH(
        datePickerWaste.filter((item) => item.type === "Fres 1/4 segment høyre")
      );
      setGetVpp34SegV(
        datePickerWaste.filter(
          (item) => item.type === "Fres 1/4 segment venstre"
        )
      );
      setGetVp34SegH(
        datePickerWaste.filter(
          (item) => item.type === "Fres 2/3 segment høyre horizontal"
        )
      );
      setGetVp34SegV(
        datePickerWaste.filter(
          (item) => item.type === "Fres 2/3 segment venstre horizontal"
        )
      );
      setGetVp48SegH(
        datePickerWaste.filter(
          (item) => item.type === "Fres 3 segment høyre vertical"
        )
      );
      setGetVp48SegV(
        datePickerWaste.filter(
          (item) => item.type === "Fres 3 segment venstre vertical"
        )
      );
      setgetReduserKniv(
        datePickerWaste.filter((item) => item.type === "Reduserer kniv")
      );

      setGetVpp34Kniv(
        datePickerWaste.filter((item) => item.type === "Fres 1/4 kniv")
      );

      setGetVp34Kniv(
        datePickerWaste.filter(
          (item) => item.type === "Fres 2/3 kniv (horizontal)"
        )
      );

      setGetVp48Kniv(
        datePickerWaste.filter((item) => item.type === "Fres 3 kniv (vertical)")
      );

      setGetBruksKniv(
        datePickerWaste.filter(
          (item) => item.type === "Råsortering/stikkhugger (Bruks)"
        )
      );
    }
  }, [datePickerWaste]);
  useEffect(() => {
    if (getRedSegmentH && getRedSegmentV) {
      setRedSegmentH(
        getRedSegmentH.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setRedSegmentV(
        getRedSegmentV.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVpp34SegH(
        getVpp34SegH.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVpp34SegV(
        getVpp34SegV.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp34SegH(
        getVp34SegH.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp34SegV(
        getVp34SegV.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp48segH(
        getVp48SegH.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp48segV(
        getVp48SegV.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setReduserKniv(
        getReduserKniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );

      setVpp34Kniv(
        getVpp34Kniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );

      setVp34Kniv(
        getVp34Kniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );

      setVp48Kniv(
        getVp48Kniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );

      setBruksKniv(
        getBruksKniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
    }
  }, [getRedSegmentH, datePickerWaste]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/tool/datepickertools/datepickertoolswaste?yearRequest=${
            startDate && startDate._d.getFullYear()
          }&month=${startDate && startDate._d.getMonth() + 1}&&day=${
            startDate && startDate._d.getDate()
          }&yearRequest2=${endDate && endDate._d.getFullYear()}&month2=${
            endDate && endDate._d.getMonth() + 1
          }&&day2=${endDate && endDate._d.getDate()}`
        );
        setDatePickerWaste(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [startDate, endDate]);
  return (
    <>
      <PageLayoutSidebar>
        <SideBar />
        <DatesearchToolsMain
          setStartDate={setStartDate}
          startDate={startDate}
          setEndDate={setEndDate}
          endDate={endDate}
          datePickerWaste={datePickerWaste}
          datePickerNew={datePickerNew}
          datePickerService={datePickerService}
          redSegmentH={redSegmentH}
          redSegmentV={redSegmentV}
          vpp34SegH={vpp34SegH}
          vpp34SegV={vpp34SegV}
          vp34SegH={vp34SegH}
          vp34SegV={vp34SegV}
          vp48segH={vp48segH}
          vp48segV={vp48segV}
          reduserKniv={reduserKniv}
          vpp34Kniv={vpp34Kniv}
          vp34Kniv={vp34Kniv}
          vp48Kniv={vp48Kniv}
          bruksKniv={bruksKniv}
        />
      </PageLayoutSidebar>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default Datesearchtools;
