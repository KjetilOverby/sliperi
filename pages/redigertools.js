import React, {useEffect, useState, useContext} from 'react'
import PageLayoutSidebar from '../src/components/common/PagelayoutSidebar'
import SideBar from '../src/components/common/Sidebar'
import RedigerToolsMain from '../src/components/redigertools/RedigerToolsMain'
const axios = require("axios");
import { MyContext } from "../src/contexts/MyContext";

const api = axios.create({
    baseURL: process.env.api,
  });


const redigertools = () => {
  const { tools, toolUpdateDatabase, setToolUpdateDatabase } =
    useContext(MyContext);

    const [toolsWaste, setToolsWaste] = useState();

    const [yearRequest, setYearRequest] = useState(new Date().getFullYear())
    const [month, setMonth] = useState(new Date().getMonth()+1)
    const [day, setDay] = useState(new Date().getDate())
    const [yearRequest2, setYearRequest2] =  useState(new Date().getFullYear())
    const [month2, setMonth2] = useState(new Date().getMonth() + 2)
    const [day2, setDay2] = useState(new Date().getDate())

    

    useEffect(() => {
        (async () => {
          try {
            const response = await api.get(`/api/tool/getToolWasteByDate?yearRequest=${yearRequest}&&month=${month}&&day=${day}&&yearRequest2=${yearRequest2}&&month2=${month2}&&day2=${day2}`);
            setToolsWaste(response.data.data);
          } catch (error) {
            console.log(error.response.body);
          }
        })();
      }, [toolUpdateDatabase]); 

      // ********************* EDIT INPUT **************************

      
return (
<>
<PageLayoutSidebar>
    <SideBar />
  <RedigerToolsMain tools={tools} toolswaste={toolsWaste} toolUpdateDatabase={toolUpdateDatabase} setToolUpdateDatabase={setToolUpdateDatabase} />
</PageLayoutSidebar>
<style jsx>{`
.container {
}
`}
</style>
</>
)
}

export default redigertools 