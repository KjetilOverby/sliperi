import React from "react";
import PagelayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/SideBar";

import SearchMain from "../src/components/search/SearchMain";

const search = () => {
  return (
    <>
      <PagelayoutSidebar>
        <SideBar />
        <SearchMain />
      </PagelayoutSidebar>
      <style jsx>{``}</style>
    </>
  );
};

export default search;
