import React, { useEffect, useState } from "react";
import PageLayoutSidebar from "../src/components/common/PagelayoutSidebar";
import SideBar from "../src/components/common/Sidebar";

import OversiktMain from "../src/components/OversiktMain";
const axios = require("axios");
const api = axios.create({
  baseURL: process.env.api,
});

const Oversikt = () => {
  const [wasteTab, setWasteTab] = useState();
  const [serviceTab, setServiceTab] = useState();
  const [newbladesTab, setNewbladesTab] = useState();

  const [linckBladesSum, setLinckBladesSum] = useState();
  const [retipSum, setRetipSum] = useState();
  const [vrakSum, setVrakSum] = useState();
  const [newBladesSum, setNewBladesSum] = useState();

  const yearRequest = new Date().getFullYear();
  const monthRequest2 = new Date().getMonth() +1;
  const monthRequest = new Date().getMonth() + 2;

  

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/oversikt/linckWasteTabell?year=${yearRequest}&month=${monthRequest}&month2=${monthRequest2}`
        );
        setWasteTab(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(wasteTab);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/oversikt/linckServiceTabell?year=${yearRequest}&month=${monthRequest}&month2=${monthRequest2}`
        );
        setServiceTab(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/oversikt/linckNewbladesTabell?year=${yearRequest}&month=${monthRequest}&month2=${monthRequest2}`
        );
        setNewbladesTab(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  /*  useEffect(() => {
    if (linckBladesTab) {
      setLinckBladesSum(
        linckBladesTab.reduce(function (a, b) {
          return a + b.typeCount;
        }, 0)
      );
    }
  }, []); */



  useEffect(() => {
    if (serviceTab) {
      setRetipSum(
        serviceTab.reduce(function (a, b) {
          return a + b.typeCount;
        }, 0)
      );
    }
  }, [serviceTab]);

  useEffect(() => {
    if (wasteTab) {
      setVrakSum(
        wasteTab.reduce(function (a, b) {
          return a + b.typeCount;
        }, 0)
      );
    }
  }, [wasteTab]);

  useEffect(() => {
    if (newbladesTab) {
      setNewBladesSum(
        newbladesTab.reduce(function (a, b) {
          return a + b.typeCount;
        }, 0)
      );
    }
  }, [newbladesTab]);

  return (
    <>
      <PageLayoutSidebar>
        <SideBar />
        <OversiktMain
          wasteTab={wasteTab}
          serviceTab={serviceTab}
          newbladesTab={newbladesTab}
          retipSum={retipSum}
          vrakSum={vrakSum}
          newBladesSum={newBladesSum}
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

export default Oversikt;
