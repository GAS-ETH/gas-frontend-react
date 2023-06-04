/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { WelcomeSideBar } from "../components/WelcomeSideBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GasLogo from "./../assets/gas.png";
import { connectWallet } from "../services/wallet/wallet";

import { Alert, styled as MuiStyled } from "@mui/material";
import { useState } from "react";
import {
  setProvider as ReduxSetProvider,
  setSigner as ReduxSetSigner,
} from "./../store/slices/wallet.slice";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
interface WalletResponse {
  connectedStatus: boolean;
  status: string;
  data: any;
}
export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [provider, setProvider] = useState<any | null>(null);
  const [signer, setSigner] = useState<any | null>(null);

  const handleSignUp = async (event: any) => {
    //
    event.preventDefault();
    console.log("form", event);
  };
  const goToConnectWallet = async () => {
    // direct user to connect to wallet
    const connectWalletResponse: WalletResponse = await connectWallet(
      setProvider,
      setSigner
    );
    console.log("connectWalletResponse", connectWalletResponse);

    // console.log();
    if (!connectWalletResponse || !connectWalletResponse.connectedStatus) {
      alert(connectWalletResponse?.status);
    }
    // make test
    if (connectWalletResponse?.data) {
      // set data in the state
      dispatch(ReduxSetProvider(connectWalletResponse.data.provider));
      dispatch(ReduxSetSigner(connectWalletResponse.data.signer));
      navigate("/dashboard");
    }
  };

  const SignUpContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    hight: auto;
    display: grid;
    grid-template-columns: 450px 1fr;
    grid-column-gap 30px;
  `;
  const SignUpSideBar = styled.div``;
  const SignUpLoginFormContainer = styled.div`
    padding: 30px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  const SignUpTitle = styled.h1`
    font-size: 36px;
    text-align: center;
  `;
  const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;

  const GASLogo = styled.img.attrs((props: { src: string }) => ({
    src: props.src,
  }))`
    width: 200px;
    height: 200px;
  `;

  const InputItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `;

  const SingUpButton = MuiStyled(Button)({
    color: "white",
    backgroundColor: "rgba(255, 49, 49)",
    marginTop: "20px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "rgba(255, 49, 49)",
      border: "1px solid rgba(255, 49, 49)",
    },
  });
  const ConnectToWalletButton = MuiStyled(Button)({
    color: "black",
    backgroundColor: "white",
    marginTop: "10px",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "white",
      border: "1px solid black",
    },
  });

  return (
    <>
      <SignUpContainer>
        <SignUpSideBar>
          <WelcomeSideBar></WelcomeSideBar>
        </SignUpSideBar>
        <SignUpLoginFormContainer>
          <GASLogo src={GasLogo}></GASLogo>
          <SignUpTitle>Sign Up for Score</SignUpTitle>
          <FormContainer onSubmit={handleSignUp}>
            <InputItem>
              <span>Your name</span>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
              />
            </InputItem>
            <InputItem>
              <span>Password</span>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </InputItem>
            <InputItem>
              <span>Confirm Password</span>
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
              />
            </InputItem>
            <SingUpButton type="submit" variant="contained">
              Sign up
            </SingUpButton>
          </FormContainer>
          <span>OR</span>
          <ConnectToWalletButton
            onClick={goToConnectWallet}
            variant="contained"
          >
            CONNECT WALLET
          </ConnectToWalletButton>
        </SignUpLoginFormContainer>
      </SignUpContainer>
    </>
  );
};
