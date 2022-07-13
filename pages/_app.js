import "../styles/globals.css";
import { useState, useEffect } from "react";
import { MyContext } from "../src/contexts/MyContext";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

function MyApp({ Component, pageProps }) {
  const [linckBlades, setLinckBlades] = useState();
  const [linckBladesDeleted, setLinckBladesDeleted] = useState();
  const [linckID, setLinckID] = useState();
  const [linckUpdateDatabase, setLinckUpdateDatabase] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/api/linck/linckblades");
        setLinckBlades(response.data.data);
      } catch (error) {
        console.log(error.response.body);
      }
    })();
  }, [linckUpdateDatabase]);
  const year = "2022";
  const month = "07";
  const month2 = "07";
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/linck/deletedBlades?&month=${month}&month2=${month2}&yearRequest=${year}`
        );
        setLinckBladesDeleted(response.data.data);
      } catch (error) {
        console.log(error.response.body);
      }
    })();
  }, [linckUpdateDatabase]);

  console.log(linckBladesDeleted);

  return (
    <MyContext.Provider
      value={{
        linckBlades,
        linckBladesDeleted,
        setLinckID,
        linckID,
        setLinckUpdateDatabase,
        linckUpdateDatabase,
      }}
    >
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
