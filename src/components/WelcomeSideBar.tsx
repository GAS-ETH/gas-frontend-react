import styled from "styled-components";
import { styled as MiuStyled } from "@mui/material/styles";

import WorldImg from "./../assets/world-sidebar.png";
import Button from "@mui/material/Button";
import { useEffect } from "react";
export const WelcomeSideBar = () => {
  //   useEffect(() => {}, []);
  const WorldSideBarContainer = styled.div<{ $WorldImg: string }>`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.$WorldImg});
    background-color: rgba(19, 19, 21, 0.72);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
  `;
  const ButtonLogin = MiuStyled(Button)({
    color: "white",
    background: "black",
  });
  const Title = styled.h1`
    font-size: 30px;
    color: white;
    margin-bottom: 30px;
  `;
  const Text = styled.p`
    margin-bottom: 10px;
  `;
  return (
    <>
      <WorldSideBarContainer $WorldImg={WorldImg}>
        <Title>Welcome back</Title>
        <Text>To keep connect with us provide your info</Text>
        <ButtonLogin variant="contained">Sign In</ButtonLogin>
      </WorldSideBarContainer>
    </>
  );
};
