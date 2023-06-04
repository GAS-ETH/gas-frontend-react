import "./index.css";

import poap0 from "./assets/poap0.png";
import poap1 from "./assets/poap1.png";
import poap3 from "./assets/poap3.png";
import poap4 from "./assets/poap4.png";
import poap6 from "./assets/poap6.png";
import user0 from "./assets/user_0.svg";
import user1 from "./assets/user_1.svg";
import user2 from "./assets/user_2.svg";
import { Event } from "./types";
import cuid from "cuid";
import { Outlet } from "react-router-dom";
import Events from "./components/Events";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import { SignUp } from "./pages/SignUp";
export const events: Event[] = [
  {
    img: poap0,
    eventId: cuid(),
    eventTitle: "Abstract Colors",
    ownerName: "Esthera Jackson",
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: poap1,
    eventId: cuid(),
    eventTitle: "Hello Worldson",
    ownerName: "Estherta Jackharta",
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: poap3,
    eventId: cuid(),
    eventTitle: "Worldes Helloras",
    ownerName: "Jack Estherson",
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: false,
  },
  {
    img: poap4,
    eventId: cuid(),
    eventTitle: "Hallor Wuralade",
    ownerName: "Jonathan Jackson",
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: poap6,
    eventId: cuid(),
    eventTitle: "Worralo Hellares",
    ownerName: "Antonio Margaretti",
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: false,
  },
  {
    img: poap0,
    eventId: cuid(),
    eventTitle: "ss Worelda",
    ownerName: "Dominic Decoco",
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: poap3,
    eventId: cuid(),
    eventTitle: "Colorita Abstracto",
    ownerName: "Ariva Derici",
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: true,
  },
  {
    img: poap4,
    eventId: cuid(),
    eventTitle: "Abstract Colors",
    ownerName: "Eratos Esteros",
    participantsImages: [user0, user1, user2, user0, user1],
    favorite: false,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <ResponsiveDrawer />,
    children: [
      { index: true, element: <EventsPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "messages", element: <MessagesPage /> },
      {
        path: "profile",
        element: <ProfilePage />,
        children: [{ path: "eventas", element: <Events events={events} /> }],
      },
      { path: "events/:eventId", element: <EventDetailsPage /> },
      // { path: 'products/:productId', element: <ProductDetailPage /> },
    ],
  },
  { path: "sign-up", element: <SignUp /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
