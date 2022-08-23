import React, { useState, useEffect } from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";
import DateSearchMain from "../src/components/datesearch/DateSearchMain";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

const Datesearch = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [datePickerWaste, setDatePickerWaste] = useState();
  const [datePickerNew, setDatePickerNew] = useState();
  const [datePickerService, setDatePickerService] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/datepicker/datepickerwaste?yearRequest=${
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

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/datepicker/datepickernew?yearRequest=${
            startDate && startDate._d.getFullYear()
          }&month=${startDate && startDate._d.getMonth() + 1}&&day=${
            startDate && startDate._d.getDate()
          }&yearRequest2=${endDate && endDate._d.getFullYear()}&month2=${
            endDate && endDate._d.getMonth() + 1
          }&&day2=${endDate && endDate._d.getDate()}`
        );
        setDatePickerNew(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [startDate, endDate]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/datepicker/datepickerservice?yearRequest=${
            startDate && startDate._d.getFullYear()
          }&month=${startDate && startDate._d.getMonth() + 1}&&day=${
            startDate && startDate._d.getDate()
          }&yearRequest2=${endDate && endDate._d.getFullYear()}&month2=${
            endDate && endDate._d.getMonth() + 1
          }&&day2=${endDate && endDate._d.getDate()}`
        );
        setDatePickerService(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [startDate, endDate]);

  return (
    <>
      <PageLayoutSidebar>
        <SideBar />
        <DateSearchMain
          setStartDate={setStartDate}
          startDate={startDate}
          setEndDate={setEndDate}
          endDate={endDate}
          datePickerWaste={datePickerWaste}
          datePickerNew={datePickerNew}
          datePickerService={datePickerService}
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

export default Datesearch;
