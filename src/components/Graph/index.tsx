// import charts modules
import {
    AreaChart, Area,
    XAxis, YAxis,
    CartesianGrid, Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
// import relevant modules
  import axios from "axios";
  import { useState, useEffect } from "react";
  import { format } from "date-fns";

 // graph container styles
  import { GraphContainer } from "./index.style";
  
  // import types
  import { ViewType } from "../../types";

  
// convert views to object
  function convertViewsToObject(views: Record<string, number>): ViewType[] {
    const result: ViewType[] = [];
  
    for (const date in views) {
      const uv = views[date];
      const pv = result.length === 0 ? uv : uv + result[result.length - 1].pv;
      const name = format(new Date(date), "dd MMM");
      result.push({ name, pv, uv });
    }
  
    return result;
  }
  
  // graph component
  const Graph = () => {
    const [data, setData] = useState<Array<string>>([]);
    const [theData, setTheData] = useState<ViewType[] | undefined>(undefined);
  
// getting data from API
    useEffect(() => {
      axios
        .get("https://fe-task-api.mainstack.io")
        .then((result) => {
          setData(result.data);
          setTheData(convertViewsToObject(result.data.graph_data.views));
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    }, []);
  
 // set initial width
    const [width, setWidth] = useState(window.innerWidth);
  
 // setting window size
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    // Building block
    return (
      <GraphContainer>
        <ResponsiveContainer width={width > 1072 ? "100%" : "95%"} height="100%">
          <AreaChart
            data={theData}
            margin={{
              top: 10,
              right: 0,
              left: -30,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="50%" stopColor="#ff5403" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#ff5403" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="linear"
              dataKey="uv"
              stroke="#ff5403"
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </GraphContainer>
    );
  };
  
  export default Graph;