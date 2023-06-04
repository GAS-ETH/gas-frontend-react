import styled from "styled-components";
import buterin from "../assets/Vitalik-Buterin.png";

import { Outlet } from "react-router-dom";
import { BlueSpan, Section, SectionHeader } from "./EventsPage";
import logo from "../assets/personal-center-human-shape.png";
import { useEffect, useState } from "react";
import { viewTokenURI } from "../services/wallet/ethers";
import store from "./../store/Store";
import { useSelector } from "react-redux";
import { getPoapsByIPFS, getTokensPerWallet } from "../services/poap/poap.http";

// TODO: GET REAL ADDRESS
// const contractAddress = "0x7bcf50180aa066c2a9313ab019fcb2c1da432dd6";
const contractAddress = "0x4DfAB1fBB08289218eA8301358869a556644Aa2D";
// const contractAddress = "0x64Df6edb98c1417c90E2E596fd50595563Ea512d";

//view token uir
// token -> address

const selectWallet = (state: any) => state.wallet;
const OutmostWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 20px;
  flex-direction: row;
  gap: 40px;
  margin-bottom: 60px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  justify-content: start;
  padding: 30px;
  align-items: start;
  border: 1px solid black;
  border-radius: 10px;
  gap: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-height: 247px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  justify-content: start;
  padding: 30px;
  align-items: start;
  border-radius: 10px;
  gap: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-height: 247px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
  width: 250px;
  height: 250px;
`;

const Logo = styled.img.attrs({
  src: logo,
  width: "100%",
  height: "100%",
})``;

const UserInfo = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-direction: column;
`;

const Username = styled.p`
  font-family: Abel;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
`;

const Points = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #7e7e7e;
`;

const Activity = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: start;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.p`
  color: #ed1c24;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ff0000;
`;

const Amount = styled.div`
  border-radius: 8px;
  padding: 3px 8px;
  width: auto;
  color: #2ea7e0;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 42px;
`;

const BioSection = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const BioHeader = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
`;

const Bio = styled.div`
  padding: 10px 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;

  color: #7e7e7e;
`;

const CategorySection = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const CategoryHeader = styled.p`
  font-size: 25px;
  color: black;
  font-weight: bold;
  padding-left: 20px;
`;

const SearchSection = styled.div`
  display: flex;
  gap: 10px;
  height: 50px;
`;

const Input = styled.input`
  padding: 5px 10px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  font-size: 20px;
`;

const ButtonSearch = styled.button`
  border: none;
  width: auto;
  padding: 5px 10px;
  background-color: lightgray;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    background-color: white;
    color: black;
  }
`;

const Suggestions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow: scroll;
  padding: 5px 10px;
  height: 70px;
  align-items: start;
`;

const Category = styled.div`
  border-radius: 8px;
  white-space: nowrap;
  padding: 3px 8px;
  overflow: ellipsis;
  width: auto;
  background-color: darkorange;
  color: white;
  &: hover {
    background-color: orange;
    color: blue;
    cursor: pointer;
  }
`;

const Column = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  flex-direction: column;
`;

const Profile = () => {
  return (
    <>
      <OutmostWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Column>
          <Wrapper>
            <UserInfo>
              <Username>Vitalik Buterin</Username>
              <Points>3000 pts</Points>
            </UserInfo>
            <Activity>
              <TagWrapper>
                <Title>Attendance: </Title>
                <Amount>66</Amount>
              </TagWrapper>
              <TagWrapper>
                <Title>Reviews: </Title>
                <Amount>99</Amount>
              </TagWrapper>
              <TagWrapper>
                <Title>Hosted Events: </Title>
                <Amount>45</Amount>
              </TagWrapper>
            </Activity>
          </Wrapper>
          <Wrapper>
            <BioSection>
              <BioHeader>Bio</BioHeader>
              <Bio>Founder of Solana</Bio>
            </BioSection>
          </Wrapper>
        </Column>
        {/* <CategorySection>
        <CategoryHeader>Category</CategoryHeader>
        <SearchSection>
          <Input />
          <ButtonSearch>Search</ButtonSearch>
        </SearchSection>
        <Suggestions>
          <Category>Lotte Tower</Category>
          <Category>ETHSeoul</Category>
          <Category>BUIDL</Category>
          <Category>My place</Category>
          <Category>Your place</Category>
          <Category>Lotte Tower-2</Category>
          <Category>ETHSeoul-2</Category>
          <Category>BUIDL-2</Category>
          <Category>My place-2</Category>
          <Category>Your place-2</Category>
          <Category>Lotte Tower-3</Category>
          <Category>ETHSeoul-3</Category>
          <Category>BUIDL-3</Category>
          <Category>My place-3</Category>
          <Category>Your place-3</Category>
          <Category>Lotte Tower-4</Category>
          <Category>ETHSeoul-4</Category>
          <Category>BUIDL-4</Category>
          <Category>My place-4</Category>
          <Category>Your place-4</Category>
          <Category>Lotte Tower-5</Category>
          <Category>ETHSeoul-5</Category>
          <Category>BUIDL-5</Category>
          <Category>My place-5</Category>
          <Category>Your place-5</Category>
        </Suggestions>
      </CategorySection> */}
      </OutmostWrapper>
      <Section>
        <SectionHeader>
          <BlueSpan>Events</BlueSpan> Participated
        </SectionHeader>
        <Outlet />
      </Section>
    </>
  );
};
export default Profile;
