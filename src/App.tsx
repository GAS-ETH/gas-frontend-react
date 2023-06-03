import './index.css';
import poap0 from './assets/poap0.png';
import poap1 from './assets/poap1.png';
import poap3 from './assets/poap3.png';
import poap4 from './assets/poap4.png';
import poap6 from './assets/poap6.png';
import user0 from './assets/user_0.svg';
import user1 from './assets/user_1.svg';
import user2 from './assets/user_2.svg';
import { Event } from './types';
import cuid from 'cuid';
import Events from './components/Events';
import EventsPage from './pages/EventsPage';
import MiniDrawer from './components/MiniDrawer';
import EventDetailsPage from './pages/EventDetailsPage';

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

// function ImageBox() {
//   return (
//     <div style={{ display: 'flex', width: 'auto' }}>
//       {events[0].participantsImages.slice(0, 4).map((url) => (
//         <img
//           style={{
//             border: '3px solid #F8F8FA',
//             marginLeft: '-10px',
//             borderRadius: '50%',
//           }}
//           src={url}
//         />
//       ))}
//       <div
//         style={{
//           display: 'flex',
//           minHeight: '46px',
//           minWidth: '46px',
//           justifyContent: 'center',
//           alignItems: 'center',
//           border: '3px solid #ffffff',
//           backgroundColor: '#F8F8FA',
//           marginLeft: '-10px',
//           borderRadius: '50%',
//         }}
//       >
//         <span
//           style={{
//             color: '#FF3131',
//             fontWeight: 700,
//           }}
//         >
//           +{events[0].participantsImages.length - 3}
//         </span>
//       </div>
//     </div>
//   );
// }

function App() {
  // return <Events events={events} />;
  // return <ImageBox />;
  // return <EventsPage />;
  return <EventDetailsPage />;
}

export default App;
