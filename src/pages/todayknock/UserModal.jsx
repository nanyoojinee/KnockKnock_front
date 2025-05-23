import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getImageSrc } from "../../util/imageCheck";
import { useNavigate } from "react-router-dom";
import * as Api from "../../api";



function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
function UserProfile({ user }) {
  const navigate = useNavigate();

  const handleChatButtonClick = async () => {
    console.log(Api.get("/chats"));
    try {
      const response = await Api.post("/chats", {
        anotherId: user.userId,
      });
      const chatId = response.data.chatId;
      navigate("/mypage");
    } catch (error) {
      console.error("채팅방 생성에 실패했습니다:", error);
    }
  };
  const shuffledHobby = shuffleArray(user.hobby || []);
  const shuffledIdeal = shuffleArray(user.ideal || []);
  const shuffledPersonality = shuffleArray(user.personality || []);
  console.log(user, "user~~~!!");
  return (
    <Container>
      <UserProfileBox>
        <BackgroundImage />
        <ProfilePicture
          src={getImageSrc(user.profileImage)}
          alt="Profile Picture"
        />
        <UserProfileContainer>
          <Nickname>{user.nickname}</Nickname>
          <Email>{user.email}</Email>
          <Tagline>{user.introduce}</Tagline>
          <UserInfomationBox>
            <ChatButton onClick={handleChatButtonClick}>채팅하기</ChatButton>
            <UserInformation>
              <UserLineContainer>
                <UserLine>Name: {user.name}</UserLine>
              </UserLineContainer>
              <UserLineContainer>
                <UserLine>MBTI: {user.mbti}</UserLine>
              </UserLineContainer>
              <UserLineContainer>
                <UserLine>Height: {user.height || "비공개"}</UserLine>
              </UserLineContainer>
              <UserLineContainer>
                <UserLine>Job: {user.job}</UserLine>
              </UserLineContainer>
              <UserLineContainer>
                <UserLine>Region: {user.region || "비공개"}</UserLine>
              </UserLineContainer>
            </UserInformation>
            <HobbyAllBox>
              <HobbyBoxContainer>
                {shuffledHobby.map((hobby, index) => (
                  <HobbyBox key={index} style={{ order: index }}>
                    {hobby}
                  </HobbyBox>
                ))}
              </HobbyBoxContainer>
              <HobbyBoxContainer>
                {shuffledIdeal.map((ideal, index) => (
                  <IdealBox key={index} style={{ order: index }}>
                    {ideal}
                  </IdealBox>
                ))}
              </HobbyBoxContainer>
              <HobbyBoxContainer>
                {shuffledPersonality.map((personality, index) => (
                  <PersonBox key={index} style={{ order: index }}>
                    {personality}
                  </PersonBox>
                ))}
              </HobbyBoxContainer>
            </HobbyAllBox>
          </UserInfomationBox>
        </UserProfileContainer>
      </UserProfileBox>
    </Container>
  );
}

export default UserProfile;

const ChatButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f0987f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f0795e;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  padding-bottom: 1.5rem;
`;

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;
const UserProfileBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const BackgroundImage = styled.div`
  width: 100%;
  height: 15vh;
  background: linear-gradient(to left, #f0987f, #f8d6cc);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
`;
const ProfilePicture = styled.img`
  width: 6rem;
  height: 6rem;
  border-color: #f2f2f2e2;
  border-width: 4px;
  border-style: solid;
  border-radius: 100%;
  margin-top: -3rem;
  margin-left: 3rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Nickname = styled.h2`
  margin-top: -1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #4b4a4a;
`;

const Email = styled.h4`
  margin-top: -0.8rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #cacaca;
`;

const Tagline = styled.div`
  border: 0.1rem #bcbcbc;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #676565;
  font-size: 0.9rem;
`;

const UserInfomationBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 3rem;
`;

const UserInformation = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const UserLineContainer = styled.div`
  display: flex;
  width: 9rem;
  margin: 0.1rem;
  justify-content: space-around;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
`;
const UserLine = styled.h3`
  margin: 0.3rem;
  color: #8f8f8f;
  font-size: 1rem;
`;
const HobbyAllBox = styled.div``;
const HobbyBox = styled.div`
  width: 3.8rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: #fa9393;
  margin: 0rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.7rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
const IdealBox = styled.div`
  width: 3.8rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: rgb(248, 143, 255);
  margin: 0rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.7rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const PersonBox = styled.div`
  width: 3.8rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: #87d5fc;
  margin: 0rem 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.7rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
const HobbyBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
`;