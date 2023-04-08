// import styled fromm styled-component
import styled from "styled-components";
//  Prop Type
interface ColoredTextProps {
  color: string;
}

// main bottom container styles
export const MainBottomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: 901px) {
    grid-template-columns: 1fr;
  }
`;

// main bottom first styles
export const MainBottomFirst = styled.div`
  min-width: 100%;
  border: 1px solid #56616b35;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

// main bottom second styles
export const MainBottomSecond = styled.div`
  min-width: 100%;
  border: 1px solid #56616b35;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

// bottom header styles
export const MainBottomHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

// main bottom header styles
export const MainBottomHeaderLocation = styled.span`
  font-weight: 700;

  @media screen and (max-width: 384px) {
    font-size: 0.7rem;
    font-weight: 600;
  }
`;

// main bottom header styles
export const MainBottomHeaderReports = styled.span`
  color: #ff5403;
  font-size: 0.7rem;

  cursor: pointer;

  @media screen and (max-width: 384px) {
    font-size: 0.6rem;
  }
`;

// main bottom styles 
export const MainBottomLower = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    flex-flow: column-reverse;
  }
`;

// main bottom left styles
export const MainBottomLeft = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 460px) {
    padding: 0 1rem;
  }
`;

// main bottom right styles
export const MainBottomRight = styled.div`
  min-width: 100%;
  max-width: 100%;

  display: grid;
  place-items: center;

  @media screen and (max-width: 460px) {
    margin-bottom: 2rem;
  }
`;

// main analytic styles
export const MainAnalytic = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 901px) {
    gap: 0.7rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    gap: 0.5rem;
  }
`;

// main flag style
export const MainFlag = styled.img`
  display: block;
  width: 1.2rem;

  @media screen and (max-width: 901px) {
    width: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 1rem;
  }
`;

// main text styles
export const MainTextAndPer = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  margin-right: 0.3rem;

  span {
    font-weight: 600;
    margin-left: 0.5rem;
  }

  @media screen and (max-width: 901px) {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

// main indicator styles
export const MainIndicator = styled.div<ColoredTextProps>`
  border-radius: 50%;
  height: 0.6rem;
  width: 0.6rem;

  margin-left: 0.1rem;
  background-color: ${(props) => props.color};
`;
