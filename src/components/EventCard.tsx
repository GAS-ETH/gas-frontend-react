import styled from 'styled-components';
import StyledIcon from './StyledIcon';
import cuid from 'cuid';

import { useState } from 'react';
const MainWrapper = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 20px;
  max-width: 350px;
  min-height: 370px;
  width: 100%;
  padding: 22px 26px;
  flex-direction: column;
  position: relative;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
`;

const EventImg = styled.img.attrs({
  objectFit: 'cover',
  width: '160px',
  height: '100%',
  borderRadius: '5px',
})``;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Details = styled.div`
  flex-direction: column;
`;

const Title = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #131315;
`;

const Organizer = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #131315;
`;

const ParticipantsLogos = styled.div`
  display: flex;
  align-items: start;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonReview = styled.button`
  padding: 5px 27px;
  color: #f8f8fa;
  text-align: center;
  letter-spacing: -0.02em;
  background: #38b6ff;
  border-radius: 70px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

const CurrentData = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  color: #38b6ff;
  text-align: center;
  letter-spacing: -0.02em;
  border-radius: 70px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    filter: brightness(85%);
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

type Props = {
  key: string;
  img: string;
  title: string;
  owner: string;
  participantsImages: string[];
  favorite: boolean;
};

const EventCard: React.FC<Props> = (props: Props) => {
  const [isFavorite, setIsFavorite] = useState(props.favorite);
  const handleFavorite: () => void = () => {
    setIsFavorite((state) => !state);
  };

  return (
    <MainWrapper>
      <StyledIcon
        onClick={handleFavorite}
        paint={isFavorite ? 'red' : 'transparent'}
      >
        <g filter='url(#filter0_d_906_1263)'>
          <rect x='4' width='34.3736' height='34' rx='17' fill='currentColor' />
          <path
            d='M26.9435 11.4004C24.9591 9.99151 22.5088 10.649 21.1859 12.2614C19.8631 10.649 17.4127 9.98369 15.4284 11.4004C14.3761 12.1518 13.7147 13.4198 13.6696 14.7582C13.5644 17.7952 16.15 20.2294 20.0961 23.963L20.1712 24.0334C20.7425 24.5735 21.6219 24.5735 22.1931 24.0256L22.2758 23.9473C26.2219 20.2216 28.8 17.7874 28.7023 14.7504C28.6572 13.4198 27.9957 12.1518 26.9435 11.4004V11.4004ZM21.2611 22.7967L21.1859 22.875L21.1108 22.7967C17.533 19.4232 15.1729 17.1925 15.1729 14.9304C15.1729 13.365 16.3003 12.1909 17.8036 12.1909C18.9611 12.1909 20.0886 12.9658 20.4869 14.0381H21.8925C22.2833 12.9658 23.4108 12.1909 24.5683 12.1909C26.0716 12.1909 27.199 13.365 27.199 14.9304C27.199 17.1925 24.8389 19.4232 21.2611 22.7967Z'
            fill='white'
          />
        </g>
        <defs>
          <filter
            id='filter0_d_906_1263'
            x='0'
            y='0'
            width='42.3735'
            height='42'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='4' />
            <feGaussianBlur stdDeviation='2' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_906_1263'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_906_1263'
              result='shape'
            />
          </filter>
        </defs>
      </StyledIcon>
      <ImgContainer>
        <EventImg src={props.img} />
      </ImgContainer>

      <TopRow>
        <Details>
          <Title>{props.title}</Title>
          <Organizer>{props.owner}</Organizer>
        </Details>
        <ParticipantsLogos>
          {props.participantsImages.slice(0, 4).map((url) => (
            <img
              key={cuid()}
              width='32px'
              height='32px'
              style={{
                border: '3px solid #F8F8FA',
                marginLeft: '-10px',
                borderRadius: '50%',
              }}
              src={url}
            />
          ))}
          <div
            style={{
              display: 'flex',
              minHeight: '32px',
              minWidth: '32px',
              justifyContent: 'center',
              alignItems: 'center',
              border: '3px solid #ffffff',
              backgroundColor: '#F8F8FA',
              marginLeft: '-10px',
              borderRadius: '50%',
            }}
          >
            <span
              style={{
                color: '#FF3131',
                fontWeight: 700,
              }}
            >
              +{props.participantsImages.length - 3}
            </span>
          </div>
        </ParticipantsLogos>
      </TopRow>
      <BottomRow>
        <CurrentData>45 reviews</CurrentData>
        <ButtonReview>See more</ButtonReview>
      </BottomRow>
    </MainWrapper>
  );
};

export default EventCard;
