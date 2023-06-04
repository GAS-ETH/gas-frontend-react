import styled from 'styled-components';
import logo from '../assets/eventsPageLogo.png';
import promo from '../assets/promo.png';
import pinIcon from '../assets/MapPin.svg';
type Props = {};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px;
`;

const LoginSignupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const SignUp = styled.button`
  background: #ff3131;
  max-height: 50px;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 15px 40px;
  border-radius: 5px;
  border: none;
  outline: none;
  &:hover {
    filter: brightness(65%)
    cursor: pointer;
  }
`;

const Login = styled(SignUp)`
  background: transparent;
  color: #131315;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const PromoImg = styled.img.attrs({
  src: promo,
})`
  filter: brightness(30%);
  width: 100%;
`;

const PromoTexts = styled.div`
  position: absolute;
  top: 50px;
  left 40px;
  max-width: 500px;
`;
const Header = styled.p`
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 82px;
  font-family: 'Abel';
  margin-bottom: 46px;
`;

const Description = styled.p`
  color: #ffffff;
  font-family: Abel;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 46px;
  margin-bottom: 46px;
`;

const Preview = styled.p`
  color: white;
  font-family: Abel;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 46px;
`;

const PinMapWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: white;
`;

const Span = styled.span`
  color: white;

  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`;

const DateTime = styled.div`
  width: 385px;
  padding: 30px;
  background: #ffffff;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BookNow = styled.button`
  height: 50px;
`;

const ProgramPromoter = styled.div``;

const EventDetailsPage = (props: Props) => {
  return (
    <MainWrapper>
      <FirstRow>
        <img src={logo} width='107px' />
        <LoginSignupWrapper>
          <Login>Login</Login>
          <SignUp>Signup</SignUp>
        </LoginSignupWrapper>
      </FirstRow>
      <ImgWrapper>
        <PromoImg />
        <PromoTexts>
          <Header>Join us at ETH Seoul 2023</Header>
          <Description>IRL HACKATHON</Description>
          <Preview>
            Get ready for an electrifying experience at ETHSeoul 2023! Join in
            for an unforgettable event where the brightest minds in blockchain
            unite.
          </Preview>
          <PinMapWrapper>
            <PinMapWrapper>
              <img src={pinIcon} />
              <Span>View Map</Span>
            </PinMapWrapper>
          </PinMapWrapper>
        </PromoTexts>
      </ImgWrapper>
    </MainWrapper>
  );
};

export default EventDetailsPage;
