import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import { IUser } from "./type";

export const userData: IUser[] = [
  {
    img: p1,
    name: "John Doe",
    lastChat: "How are you doing?",
    clock: "16:45",
    seen: true,
  },
  {
    img: p2,
    name: "Travis Barker",
    lastChat: "... is typing",
    clock: "16:45",
    seen: true,
  },
  {
    img: p3,
    name: "Kate Rose",
    lastChat: "you: See you tomorrow!",
    clock: "16:45",
    seen: true,
  },
  {
    img: p4,
    name: "Robert Parker",
    lastChat: "Awesome!",
    clock: "16:45",
    seen: true,
  },
  {
    img: p5,
    name: "Rick Owens",
    lastChat: "Good idea 🤩",
    clock: "16:45",
    seen: true,
  },
];
