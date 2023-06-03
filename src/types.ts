export type Participant = {
  publicKey: string;
  img: string;
  name: string;
  bio: string;
  poaps: string[];
  title: string;
  owner: string;
  favorite: boolean;
  participants: string[];
};

export type Poap = {
  id: string;
  img: string;
  title: string;
  ownerName: string;
  participants: string[];
};

export type Event = {
  img: string;
  eventId: string;
  eventTitle: string;
  ownerName: string;
  participantsImages: string[];
  favorite: boolean;
};
