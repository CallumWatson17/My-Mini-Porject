import styled, { css } from "styled-components";
import background from "../../assets/sports_pattern.png";

export const HomePageContainer = styled.div`
  background-image: url(${background});
  background-repeat: repeat;
  width: 80%;
  height: 1000px;
`;

export const ContentContainer = styled.div`
  margin: 50px;
  height: 400px;
  font-family: "Verdana";
`;

const sharedStyle = css`
  margin: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
`;

export const PlayerContainer = styled.div`
  ${sharedStyle}
`;

export const ManagerContainer = styled.div`
  ${sharedStyle}
`;

export const ClubContainer = styled.div`
  ${sharedStyle}
`;

export const ClubName = styled.div``;

export const ClubManagerName = styled.div``;

export const ClubPlayersContainer = styled.div`
  background-color: #f5f4f4;
  padding: 20px;
  text-align: center;
`;

export const HonorsContainer = styled.div`
  padding: 20px;
  background-color: #f5f4f4;
  text-align: center;
`;

export const HonorContainer = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

export const ClubPlayersTitle = styled.div`
  font-size: 18px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Arial";
  background-color: #f8d993;
  padding: 10px;
  margin-bottom: 25px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  background-color: #a8cdf5;
`;

export const ClubPlayer = styled.div`
  height: 15px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  background-color: #dfdfdf;
  font-size: 12px;
  text-align: center;
  margin: 5px;
  margin-bottom: 10px;

  :nth-child(even) {
    background-color: #dfeeff;
  }
`;

export const HonorsTitle = styled.div`
  font-size: 18px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Arial";
  background-color: #f8d993;
  padding: 10px;
  margin-bottom: 25px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

export const HonorYear = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  border-left: 1px solid #f9d177;
  border-right: 1px solid #f9d177;

  :last-child {
    border-bottom: 1px solid #f9d177;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const HonorName = styled.div`
  padding: 10px;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: #f8d993;
  color: black;
  font-family: "Arial";
  font-weight: bold;
  font-size: 16px;
  border-top: 1px solid #f9d177;
  border-left: 1px solid #f9d177;
  border-right: 1px solid #f9d177;
`;

export const InfoContainer = styled.div`
  padding: 10px;
  background-color: pink;
  margin: 20px;
  border-radius: 5px;
`;
