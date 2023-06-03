import styled from "styled-components";
import { WelcomeSideBar } from "../components/WelcomeSideBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GasLogo from "./../assets/gas.png";

export const SignUp = () => {
  const SignUpContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    hight: auto;
  `;
  const SignUpSideBar = styled.div``;
  const SignUpLoginFormContainer = styled.div``;
  const SignUpTitle = styled.h1`
    font-size: 36px;
  `;

  const GASLogo = styled.img.attrs((props: { $GASLogoImg: string }) => ({
    src: props.$GASLogoImg,
  }))``;

  return (
    <>
      <SignUpContainer>
        <SignUpSideBar>
          <WelcomeSideBar></WelcomeSideBar>
        </SignUpSideBar>
        <SignUpLoginFormContainer>
          {/* TODO: CHANGE LOGO RESOLUTION */}
          <GASLogo src={GasLogo}></GASLogo>
          <SignUpTitle>Sign Up for Score</SignUpTitle>
          <form>
            <div>
              <span>Your name</span>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
              />
            </div>
            <div>
              <span>Password</span>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <div>
              <span>Confirm Password</span>
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
              />
            </div>
            <Button variant="contained">Sign up</Button>
          </form>
          <span>OR</span>
          <Button variant="contained">CONNECT WALLET</Button>
        </SignUpLoginFormContainer>
      </SignUpContainer>
    </>
  );
};
