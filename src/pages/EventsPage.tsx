import styled from 'styled-components';
import topImg from '../assets/events_page_top.png';
import Events from '../components/Events';
import { events } from '../App';

const MainWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: #f8f8fa;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SectionHeader = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  margin-left: 20px;
`;

const BlueSpan = styled.span`
  color: #38b6ff;
`;

const ImgContainer = styled.div`
  width: 100%;
`;

const TopImg = styled.img.attrs({
  src: topImg,
  width: '100%',
})``;

type Props = {};

const EventsPage = (props: Props) => {
  return (
    <MainWrapper>
      <ImgContainer>
        <TopImg />
      </ImgContainer>
      <Section>
        <SectionHeader>
          <BlueSpan>Events</BlueSpan> Participated
        </SectionHeader>
        <Events events={events} />
      </Section>
      <Section>
        <SectionHeader>
          <BlueSpan>Trending</BlueSpan> Events
        </SectionHeader>
        <Events events={events} />
      </Section>
    </MainWrapper>
  );
};

export default EventsPage;
