import "../styles/globals.css";
import { useState, useEffect } from "react";
import { MyContext } from "../src/contexts/MyContext";
const axios = require("axios");
import { Auth0Provider } from "@auth0/auth0-react";

const api = axios.create({
  baseURL: process.env.api,
});

function MyApp({ Component, pageProps }) {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const [linckBlades, setLinckBlades] = useState();
  const [linckBladesDeleted, setLinckBladesDeleted] = useState();
  const [linckServiceBlades, setLinckServiceBlades] = useState();
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

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const month2 = new Date().getMonth() + 2;

  console.log(month);
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

  // SERVICE

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(
          `/api/linck/service/serviceBlades?&month=${month}&month2=${month2}&yearRequest=${year}`
        );
        setLinckServiceBlades(response.data.data);
      } catch (error) {
        console.log(error.response.body);
      }
    })();
  }, [linckUpdateDatabase]);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={typeof window !== "undefined" && window.location.origin}
    >
      <MyContext.Provider
        value={{
          linckBlades,
          linckBladesDeleted,
          setLinckID,
          linckID,
          setLinckUpdateDatabase,
          linckUpdateDatabase,
          linckServiceBlades,
        }}
      >
        <Component {...pageProps} />
      </MyContext.Provider>
    </Auth0Provider>
  );
}

export default MyApp;
