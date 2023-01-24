import React from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";
import StatistikkMainPage from "../src/components/statistikk/StatistikkMainPage";

const statistikk = () => {
  return (
    <>
      <PageLayoutSidebar>
        <SideBar />
        <StatistikkMainPage />
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
