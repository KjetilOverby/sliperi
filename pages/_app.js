import "../styles/globals.css";
import { useState, useEffect } from "react";
import { MyContext } from "../src/contexts/MyContext";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

function MyApp({ Component, pageProps }) {
  const [linckBlades, setLinckBlades] = useState();

  useEffect(() => {
    api
      .get("/api/linck/linckblades")
      .then(function (response) {
        setLinckBlades(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <MyContext.Provider value={{ linckBlades }}>
      <Component {...pageProps} />{" "}
    </MyContext.Provider>
  );
}

export default MyApp;
