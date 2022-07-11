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
 

    (async () => {
      try {
        const response = await api.get('/api/linck/linckblades')
        setLinckBlades(response.data.data);
      } catch (error) {
        console.log(error.response.body);
      }
    })();
  }, [])




  return (
    <MyContext.Provider value={{ linckBlades }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
