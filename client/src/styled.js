import styled from "styled-components";
import background from "./assets/square_bg.png";

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
  letter-spacing: 0.5px;
  background-color: #daf7a6;
  padding: 40px;
  font-family: Arial;
  border: 2px solid grey;
  background-image: url(${background});
  background-repeat: repeat;
  margin-bottom: 20px;
`;
