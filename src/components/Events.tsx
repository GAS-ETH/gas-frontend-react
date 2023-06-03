import styled from 'styled-components';
import EventCard from './EventCard';
import { Event } from '../types';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  gap: 40px;
  height: 100%;
`;

type Props = { events: Event[] };

const Events = (props: Props) => {
  return (
    <Container>
      {props.events.map((event) => (
        <EventCard
          key={event.eventId}
          img={event.img}
          title={event.eventTitle}
          owner={event.ownerName}
          participantsImages={event.participantsImages}
          favorite={event.favorite}
        />
      ))}
    </Container>
  );
};

export default Events;
