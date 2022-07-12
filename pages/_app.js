import "../styles/globals.css";
import { useState, useEffect } from "react";
import { MyContext } from "../src/contexts/MyContext";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

const url = "/api/linck/linckblades";

function MyApp({ Component, pageProps }) {
  const [linckBlades, setLinckBlades] = useState();
  const [linckID, setLinckID] = useState();

 

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(url);
        setLinckBlades(response.data.data);
      } catch (error) {
        console.log(error.response.body);
      }
    })();
  }, []);

  return (
    <MyContext.Provider value={{ linckBlades, setLinckID, linckID}}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
