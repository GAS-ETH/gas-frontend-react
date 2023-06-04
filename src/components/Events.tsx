import styled from 'styled-components';
import EventCard from './EventCard';
import poap0 from '../assets/poap0.png';
import poap1 from '../assets/poap1.png';
import poap3 from '../assets/poap3.png';
import poap4 from '../assets/poap4.png';
import poap6 from '../assets/poap6.png';
import user0 from '../assets/user_0.svg';
import user1 from '../assets/user_1.svg';
import user2 from '../assets/user_2.svg';
import { Event } from '../types';
import cuid from 'cuid';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  height: 100%;
`;

type Props = { events: Event[] };

export const events: Event[] = [
  {
    img: poap0,
    eventId: cuid(),
    eventTitle: 'Abstract Colors',
    ownerName: 'Esthera Jackson',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: poap1,
    eventId: cuid(),
    eventTitle: 'Hello Worldson',
    ownerName: 'Estherta Jackharta',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: poap3,
    eventId: cuid(),
    eventTitle: 'Worldes Helloras',
    ownerName: 'Jack Estherson',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: false,
  },
  {
    img: poap4,
    eventId: cuid(),
    eventTitle: 'Hallor Wuralade',
    ownerName: 'Jonathan Jackson',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: poap6,
    eventId: cuid(),
    eventTitle: 'Worralo Hellares',
    ownerName: 'Antonio Margaretti',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: false,
  },
  {
    img: poap0,
    eventId: cuid(),
    eventTitle: 'ss Worelda',
    ownerName: 'Dominic Decoco',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: poap3,
    eventId: cuid(),
    eventTitle: 'Colorita Abstracto',
    ownerName: 'Ariva Derici',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: poap4,
    eventId: cuid(),
    eventTitle: 'Abstract Colors',
    ownerName: 'Eratos Esteros',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: false,
  },
];

const Events = (props?: Props) =>
  props !== undefined ? (
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
  ) : (
    <Container>
      {events.map((event) => (
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

export default Events;
