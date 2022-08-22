import React, { useState, useEffect } from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";
import DatesearchToolsMain from "../src/components/datesearchtools/DatesearchToolsMain";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

const datesearchtools = () => {
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
  const [motstV40, setMotstV40] = useState();
  const [motstV25, setMotstV25] = useState();
  const [vpp34Kniv, setVpp34Kniv] = useState();
  const [vpp32Knivholder, setVpp32Knivholder] = useState();
  const [vpp34motstH, setVpp34motstH] = useState();
  const [vpp34motstV, setVpp34motstV] = useState();
  const [vp34Kniv, setVp34Kniv] = useState();
  const [vp34motst, setVp34motst] = useState();
  const [vp48Kniv, setVp48Kniv] = useState();
  const [vp48motstH, setVp48motstH] = useState();
  const [vp48motstV, setVp48motstV] = useState();
  const [bruksKniv, setBruksKniv] = useState();
  const [trimmerJust, setTrimmerJust] = useState();
  const [eksaktKapp, setEksaktKapp] = useState();
  const [endekapp, setEndekapp] = useState();
  const [trimmerBord, setTrimmerBord] = useState();

  const [getRedSegmentH, setGetRedSegmentH] = useState();
  const [getRedSegmentV, setGetRedSegmentV] = useState();
  const [getVpp34SegH, setGetVpp34SegH] = useState();
  const [getVpp34SegV, setGetVpp34SegV] = useState();
  const [getVp34SegH, setGetVp34SegH] = useState();
  const [getVp34SegV, setGetVp34SegV] = useState();
  const [getVp48SegH, setGetVp48SegH] = useState();
  const [getVp48SegV, setGetVp48SegV] = useState();
  const [getReduserKniv, setgetReduserKniv] = useState();
  const [getMotstV40, setGetMotstV40] = useState();
  const [getMotstV25, setGetMotstV25] = useState();
  const [getVpp34Kniv, setGetVpp34Kniv] = useState();
  const [getVpp34Knivholder, setGetVpp34Knivholder] = useState();
  const [getVpp34motstH, setGetVpp34motstH] = useState();
  const [getVpp34motstV, setGetVpp34motstV] = useState();
  const [getVp34Kniv, setGetVp34Kniv] = useState();
  const [getVp34motst, setGetVp34motst] = useState();
  const [getVp48Kniv, setGetVp48Kniv] = useState();
  const [getVp48motstH, setGetVp48motstH] = useState();
  const [getVp48motstV, setGetVp48motstV] = useState();
  const [getBruksKniv, setGetBruksKniv] = useState();
  const [getTrimmerJust, setGetTrimmerJust] = useState();
  const [getEksaktKapp, setGetEksaktKapp] = useState();
  const [getEndekapp, setGetEndekapp] = useState();
  const [getTrimmerBord, setGetTrimmerBord] = useState();

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
      setGetMotstV40(
        datePickerWaste.filter(
          (item) => item.type === "Reduserer motstål rekke 1"
        )
      );
      setGetMotstV25(
        datePickerWaste.filter(
          (item) => item.type === "Reduserer motstål rekke 2 og 3"
        )
      );
      setGetVpp34Kniv(
        datePickerWaste.filter((item) => item.type === "Fres 1/4 kniv")
      );
      setGetVpp34Knivholder(
        datePickerWaste.filter((item) => item.type === "Fres 1/4 knivholder")
      );
      setGetVpp34motstH(
        datePickerWaste.filter((item) => item.type === "Fres 1/4 motstål høyre")
      );
      setGetVpp34motstV(
        datePickerWaste.filter(
          (item) => item.type === "Fres 1/4 motstål venstre"
        )
      );
      setGetVp34Kniv(
        datePickerWaste.filter(
          (item) => item.type === "Fres 2/3 kniv (horizontal)"
        )
      );
      setGetVp34motst(
        datePickerWaste.filter(
          (item) => item.type === "Fres 2/3 motstål (horizontal)"
        )
      );
      setGetVp48Kniv(
        datePickerWaste.filter((item) => item.type === "Fres 3 kniv (vertical)")
      );
      setGetVp48motstH(
        datePickerWaste.filter(
          (item) => item.type === "Fres 3 motstål høyre (vertical)"
        )
      );
      setGetVp48motstV(
        datePickerWaste.filter(
          (item) => item.type === "Fres 3 motstål venstre (vertical)"
        )
      );
      setGetBruksKniv(
        datePickerWaste.filter(
          (item) => item.type === "Råsortering/stikkhugger (Bruks)"
        )
      );
      setGetTrimmerJust(
        datePickerWaste.filter((item) => item.type === "Trimmer justerverk")
      );
      setGetEksaktKapp(
        datePickerWaste.filter((item) => item.type === "Eksaktkappe justerverk")
      );
      setGetEndekapp(
        datePickerWaste.filter((item) => item.type === "Endekapp justerverk")
      );
      setGetTrimmerBord(
        datePickerWaste.filter((item) => item.type === "Trimmer bordsortering")
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
      setMotstV40(
        getMotstV40.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setMotstV25(
        getMotstV25.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVpp34Kniv(
        getVpp34Kniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVpp32Knivholder(
        getVpp34Knivholder.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVpp34motstH(
        getVpp34motstH.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVpp34motstV(
        getVpp34motstV.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp34Kniv(
        getVp34Kniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp34motst(
        getVp34motst.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp48Kniv(
        getVp48Kniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp48motstH(
        getVp48motstH.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp48motstV(
        getVp48motstV.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setBruksKniv(
        getBruksKniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setTrimmerJust(
        getTrimmerJust.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setEksaktKapp(
        getEksaktKapp.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setEndekapp(
        getEndekapp.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setTrimmerBord(
        getTrimmerBord.reduce(function (a, b) {
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
            startDate && startDate._d.getDay()
          }&yearRequest2=${endDate && endDate._d.getFullYear()}&month2=${
            endDate && endDate._d.getMonth() + 2
          }&&day2=${endDate && endDate._d.getDay()}`
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

export default datesearchtools;
