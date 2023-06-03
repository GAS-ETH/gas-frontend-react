import styled from "styled-components";
import WorldImg from "./../assets/world-sidebar.png";
import Button from "@mui/material/Button";
export const WelcomeSideBar = () => {
  const WorldSideBarContainer = styled.div<{ $WorldImg: string }>`
        width: 100%;
        height: 100%
        background-image: url(${(props) => props.$WorldImg});
        display: flex;
        align-items: center;
        justify-content: center;
        
    `;
  return (
    <>
      <WorldSideBarContainer $WorldImg={WorldImg}>
        <p>To keep connect with us provide your info</p>
        <Button variant="contained">Sign In</Button>
      </WorldSideBarContainer>
    </>
  );
};
