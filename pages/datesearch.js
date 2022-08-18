import React, { useState } from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";
import DateSearchMain from "../src/components/datesearch/DateSearchMain";
const datesearch = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <>
      <PageLayoutSidebar>
        <SideBar />
        <DateSearchMain
          setStartDate={setStartDate}
          startDate={startDate}
          setEndDate={setEndDate}
          endDate={endDate}
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

export default datesearch;
