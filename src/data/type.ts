export interface IChat {
  participants: Participant[];
  messages: Message[];
}

interface Message {
  sender: string;
  receiver: string;
  text: string;
  timestamp: string;
}

interface Participant {
  img: string;
  name: string;
  id: string;
  lastSeen: string;
}
