import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import { IChat } from "./type";

export const userData: IChat[] = [
  {
    participants: [
      {
        img: p1,
        name: "Ali",
        id: "123",
        lastSeen: "2023-04-17T09:00:00Z",
      },
      {
        img: p2,
        name: "Mohammad",
        id: "456",
        lastSeen: "2023-04-16T09:00:00Z",
      },
    ],
    messages: [
      {
        sender: "123",
        receiver: "456",
        text: "Hey Mohammad, how are you?",
        timestamp: "2023-04-17T13:00:00Z",
      },
      {
        sender: "456",
        receiver: "123",
        text: "Hi Ali, I'm good thanks! How about you?",
        timestamp: "2023-04-17T13:05:00Z",
      },
      {
        sender: "123",
        receiver: "456",
        text: "Bye.",
        timestamp: "2023-04-17T13:10:00Z",
      },
    ],
  },
  {
    participants: [
      {
        img: p2,
        name: "Saman",
        id: "123",
        lastSeen: "2023-04-17T09:00:00Z",
      },
      {
        img: p3,
        name: "Ahmad",
        id: "456",
        lastSeen: "2023-04-17T09:00:00Z",
      },
    ],
    messages: [
      {
        sender: "123",
        receiver: "456",
        text: "Hey Ahmad, how are you?",
        timestamp: "2023-04-17T13:00:00Z",
      },
      {
        sender: "456",
        receiver: "123",
        text: "Hi Saman, I'm good thanks! How about you?",
        timestamp: "2023-04-17T13:05:00Z",
      },
      {
        sender: "123",
        receiver: "456",
        text: "I'm doing well too, thanks for asking.",
        timestamp: "2023-04-17T13:10:00Z",
      },
    ],
  },
  {
    participants: [
      {
        img: p3,
        name: "Nilo",
        id: "123",
        lastSeen: "2023-04-17T09:00:00Z",
      },
      {
        img: p4,
        name: "Hossein",
        id: "456",
        lastSeen: "2023-04-17T09:00:00Z",
      },
    ],
    messages: [
      {
        sender: "123",
        receiver: "456",
        text: "Hey Hossein, how are you?",
        timestamp: "2023-04-17T13:00:00Z",
      },
      {
        sender: "456",
        receiver: "123",
        text: "Hi Nilo, I'm good thanks! How about you?",
        timestamp: "2023-04-17T13:05:00Z",
      },
      {
        sender: "123",
        receiver: "456",
        text: " thanks .",
        timestamp: "2023-04-17T13:10:00Z",
      },
    ],
  },
];
