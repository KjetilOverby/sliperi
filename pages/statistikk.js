import React, { useEffect, useState } from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";
import StatistikkMainPage from "../src/components/statistikk/StatistikkMainPage";
const axios = require("axios");
const api = axios.create({
  baseURL: process.env.api,
});

const statistikk = () => {
  const [wasteThisYear, setWasteThisYear] = useState();
  const [serviceThisYear, setServiceThisYear] = useState();
  const [newThisYear, setNewThisYear] = useState();

  const [toolsWaste, setToolsWaste] = useState();

  const currentYear = new Date().getFullYear();

  console.log(wasteThisYear);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/datepicker/datepickerwaste?yearRequest=${currentYear}&&month=01&&day=01&&yearRequest2=${currentYear}&&month2=12&&day2=12`
        );
        setWasteThisYear(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYear]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/datepicker/datepickerservice?yearRequest=${currentYear}&&month=01&&day=01&&yearRequest2=${currentYear}&&month2=12&&day2=12`
        );
        setServiceThisYear(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYear]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/datepicker/datepickernew?yearRequest=${currentYear}&&month=01&&day=01&&yearRequest2=${currentYear}&&month2=12&&day2=12`
        );
        setNewThisYear(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYear]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/tool/datepickertools/datepickertoolswaste?yearRequest=${currentYear}&&month=01&&day=01&&yearRequest2=${currentYear}&&month2=12&&day2=12`
        );
        setToolsWaste(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYear]);

  return (
    <>
      <PageLayoutSidebar>
        <SideBar />
        <StatistikkMainPage
          currentYear={currentYear}
          wasteThisYear={wasteThisYear}
          serviceThisYear={serviceThisYear}
          newThisYear={newThisYear}
          toolsWaste={toolsWaste}
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

export default statistikk;
