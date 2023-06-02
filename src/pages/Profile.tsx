import styled from 'styled-components';
import logo from '../assets/personal-center-human-shape.png';

const OutmostWrapper = styled.div`
  display: flex;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background-color: red;
  width: 36px;
  height: 36px;
`;

const Logo = styled.img.attrs({
  src: logo,
  width: '32px',
  height: '32px',
})``;

const Profile = () => (
  <OutmostWrapper>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
  </OutmostWrapper>
);
export default Profile;
