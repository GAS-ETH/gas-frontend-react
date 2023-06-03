import styled from 'styled-components';

const MainWrapper = styled.div`
  flex-grow: 1;
  background: #ffffff;
  border-radius: 20px;
  min-height: 370px;
  min-width: 350px;
  padding: 22px 26px;
  flex-direction: column;
  gap: 20px;
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

const TopRow = styled.div`
  display: flex;
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

type Props = {
  key: string;
  img: string;
  title: string;
  owner: string;
  participantsImages: string[];
  favorite: boolean;
};

const EventCard: React.FC<Props> = (props: Props) => {
  return (
    <MainWrapper>
      <img></img>
      <TopRow>
        <Title></Title> <Organizer></Organizer>
      </TopRow>
    </MainWrapper>
  );
};

export default EventCard;
