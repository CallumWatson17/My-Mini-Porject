import React from "react";
import container from "./container";
import InputBox from "../../components/InputBox";

import {
  HomePageContainer,
  ContentContainer,
  PlayerContainer,
  ClubContainer,
  ManagerContainer,
  ClubName,
  ClubManagerName,
  ClubPlayersContainer,
  ClubPlayersTitle,
  ClubPlayer,
  HonorContainer,
  HonorsContainer,
  HonorsTitle,
  HonorName,
  HonorYear,
  InfoContainer,
} from "./styled";

const generateContent = (type, pageContent) => {
  console.log(type);
  if (type === "players") {
    return pageContent.map((content) => (
      <PlayerContainer>
        <div>NAME: {content.name} </div>
        <div>AGE: {content.age} </div>
        <div>POSITION: {content.position} </div>
        <div>CLUBS: {content.club} </div>
      </PlayerContainer>
    ));
  }

  if (type === "managers") {
    return pageContent.map((content) => (
      <PlayerContainer>
        <div>NAME: {content.name} </div>
        <div>AGE: {content.age} </div>
        <div>NATIONALITY: {content.nationality} </div>
        <div>CLUBS: {content.club} </div>
        <div>AWARDS: {content.managerial_titles} </div>
      </PlayerContainer>
    ));
  }

  if (type === "clubs") {
    return pageContent.map((content) => (
      <ClubContainer>
        <ClubName>{content.name} </ClubName>
        <ClubManagerName>Manager: {content.manager} </ClubManagerName>
        <ClubPlayersContainer>
          <ClubPlayersTitle>Players</ClubPlayersTitle>
          {content.players.map((player) => (
            <ClubPlayer> {player} </ClubPlayer>
          ))}
        </ClubPlayersContainer>
        <HonorsContainer>
          <HonorsTitle> Honors </HonorsTitle>
          {content.honors.map((honor) => (
            <HonorContainer>
              <HonorName> {honor.name} </HonorName>
              {honor.years.map((year) => (
                <HonorYear> {year} </HonorYear>
              ))}
            </HonorContainer>
          ))}
        </HonorsContainer>
        <InfoContainer>{content.info} </InfoContainer>
      </ClubContainer>
    ));
  }
};

const HomePage = ({ getData, pageContent, type }) => (
  <HomePageContainer>
    <InputBox getData={getData} />
    <ContentContainer>{generateContent(type, pageContent)}</ContentContainer>
  </HomePageContainer>
);

export default container(HomePage);
