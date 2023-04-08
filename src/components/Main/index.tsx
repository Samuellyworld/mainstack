// import custom styles
import {
  MainContainer, MainHeader,
  MainHeaderAnalyticText, MainHeaderBottom,
  MainHeaderCheckContainer, MainHeaderCheckText,
  MainHeaderDays, MainHeaderGoodText,
  MainHeaderText,
} from "./index.styles";

// import components that makes up the component
import MainBottom from "../MainBottom";
import Graph from "../Graph";

// Main JSX Component
const Main = () => {
  return (
    <MainContainer>
      <MainHeaderText>Dashboard</MainHeaderText>

      <MainHeader>
        <MainHeaderGoodText>Good morning, Blessing ⛅️</MainHeaderGoodText>
        <MainHeaderCheckContainer>
          <MainHeaderCheckText>
            Check out your dashboard summary
          </MainHeaderCheckText>
          <MainHeaderAnalyticText>View Analytics</MainHeaderAnalyticText>
        </MainHeaderCheckContainer>

        <MainHeaderBottom>
          <MainHeaderDays>1 Day</MainHeaderDays>
          <MainHeaderDays>3 Day</MainHeaderDays>
          <MainHeaderDays>7 Day</MainHeaderDays>
          <MainHeaderDays>30 Day</MainHeaderDays>
          <MainHeaderDays>All time</MainHeaderDays>
          <MainHeaderDays>Custom Date</MainHeaderDays>
        </MainHeaderBottom>
      </MainHeader>

      <div className="graph">
        <Graph />
      </div>

      <MainBottom />
    </MainContainer>
  );
};

export default Main;
