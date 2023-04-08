// import relevant modules
import { useEffect, useState } from "react";
import axios from "axios";
import {
  MainAnalytic, MainBottomContainer,
  MainBottomFirst, MainBottomHeader,
  MainBottomHeaderLocation, MainBottomHeaderReports,
  MainBottomLeft, MainBottomLower,
  MainBottomRight, MainBottomSecond,
  MainFlag, MainIndicator, MainTextAndPer,
} from "./index.style";

// import radialchart
import { RadialChart } from "react-vis";
// @ts-ignore
import { findFlagUrlByCountryName } from "country-flags-svg";
import { GraphDataType } from "../../types";

// JSX Component
const MainBottom = () => {
    // initial state
  const [data, setData] = useState([]);
  const [locationData, setlocationData] = useState([]);
  const [graphData1, setGraphData1] : GraphDataType  = useState([]);
  const [graphData2, setGraphData2] : GraphDataType = useState([]);

  const colors : string[] = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468"];
  const colors1 : string[] = ["#599EEA", "#844FF6", "#0FB77A", "#FAB70A"];

  // convert top locations data
  function convertTopLocationsToData(
    topLocations: { country: string; count: number; percent: number }[],
    colors: string[]
  ): { angle: number; color: string }[] {
    const data = topLocations.map((location, index) => ({
      angle: location.percent,
      color: colors[index],
    }));
    return data;
  }

  // get data from API
  useEffect(() => {
    axios
      .get("https://fe-task-api.mainstack.io")
      .then((result) => {
        setData(result.data.top_locations);
        setlocationData(result.data.top_sources);
        setGraphData1(
          convertTopLocationsToData(result.data.top_locations, colors)
        );
        setGraphData2(
          convertTopLocationsToData(result.data.top_sources, colors1)
        );
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  // initial state
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);

  // capitalize first letter
  function capitalizeFirstLetter(text : string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // handle resize 
  const handleResize = () => {
    if (window.innerWidth > 900) {
      setWidth(150);
      setHeight(150);
    } else if (window.innerWidth > 600 && window.innerWidth < 900) {
      setWidth(200);
      setHeight(200);
    } else if (window.innerWidth < 600) {
      setWidth(150);
      setHeight(150);
    }
  };

  // event listener
  window.addEventListener("resize", handleResize);

  // building block
  return (
    <MainBottomContainer>
      <MainBottomFirst>
        <MainBottomHeader>
          <MainBottomHeaderLocation>Top Locations</MainBottomHeaderLocation>
          <MainBottomHeaderReports>View full reports</MainBottomHeaderReports>
        </MainBottomHeader>

        <MainBottomLower>
          <MainBottomLeft>
            {data.map((one: any, idx: number) => {
              const { country } = one;

              const flag = findFlagUrlByCountryName(country);
              console.log(flag);

              return (
                <MainAnalytic>
                  <MainFlag src={flag} alt="flag" />
                  <MainTextAndPer>
                    {country} <span>{one.percent}%</span>
                  </MainTextAndPer>
                  <MainIndicator color={colors[idx]}></MainIndicator>
                </MainAnalytic>
              );
            })}
          </MainBottomLeft>
          <MainBottomRight>
            <RadialChart
              data={graphData1}
              width={width}
              height={height}
              labelsRadiusMultiplier={0.8}
              innerRadius={width * 0.29}
              radius={width * 0.49}
              colorType="literal"
            />
          </MainBottomRight>
        </MainBottomLower>
      </MainBottomFirst>
      <MainBottomSecond>
        <MainBottomHeader>
          <MainBottomHeaderLocation>
            Top Referral source
          </MainBottomHeaderLocation>
          <MainBottomHeaderReports>View full reports</MainBottomHeaderReports>
        </MainBottomHeader>

        <MainBottomLower>
          <MainBottomLeft>
            {locationData.map((one: any, idx: number) => {
                console.log(one, "one")
              return (
                <MainAnalytic>
                  <MainFlag src={`pngs/${one.source}.png`} alt="icon" />
                  <MainTextAndPer>
                    {capitalizeFirstLetter(one.source)} <span>{one.percent}%</span>
                  </MainTextAndPer>
                  <MainIndicator color={colors1[idx]}></MainIndicator>
                </MainAnalytic>
              );
            })}
          </MainBottomLeft>
          <MainBottomRight>
            <RadialChart
              data={graphData2}
              width={width}
              height={height}
              labelsRadiusMultiplier={0.8}
              innerRadius={width * 0.29}
              radius={width * 0.49}
              colorType="literal"
            />
          </MainBottomRight>
        </MainBottomLower>
      </MainBottomSecond>
    </MainBottomContainer>
  );
};

export default MainBottom;
