import './index.css';
import user0 from './assets/user_0.svg';
import user1 from './assets/user_1.svg';
import user2 from './assets/user_2.svg';
import { Event } from './types';
import cuid from 'cuid';
import event from './assets/event.png';
import Events from './components/Events';

const events: Event[] = [
  {
    img: event,
    eventId: cuid(),
    eventTitle: 'Abstract Colors',
    ownerName: 'Esthera Jackson',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: event,
    eventId: cuid(),
    eventTitle: 'Hello Worldson',
    ownerName: 'Estherta Jackharta',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: event,
    eventId: cuid(),
    eventTitle: 'Worldes Helloras',
    ownerName: 'Jack Estherson',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: false,
  },
  {
    img: event,
    eventId: cuid(),
    eventTitle: 'Hallor Wuralade',
    ownerName: 'Jonathan Jackson',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: event,
    eventId: cuid(),
    eventTitle: 'Worralo Hellares',
    ownerName: 'Antonio Margaretti',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: false,
  },
  {
    img: event,
    eventId: cuid(),
    eventTitle: 'ss Worelda',
    ownerName: 'Dominic Decoco',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: event,
    eventId: cuid(),
    eventTitle: 'Colorita Abstracto',
    ownerName: 'Ariva Derici',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: event,
    eventId: cuid(),
    eventTitle: 'Abstract Colors',
    ownerName: 'Eratos Esteros',
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: false,
  },
];

function App() {
  return <Events events={events} />;
}

export default App;
