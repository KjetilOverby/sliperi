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
        <DateSearchMain />
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
