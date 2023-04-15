//import Images
import avatar02 from "../../assets/images/users/avatar-2.jpg"
import avatar03 from "../../assets/images/users/avatar-3.jpg"
import avatar04 from "../../assets/images/users/avatar-4.jpg"
import avatar06 from "../../assets/images/users/avatar-6.jpg"

const chats = [
  {
    id: 1,
    roomId: 1,
    status: "offline",
    image: avatar02,
    name: "John Doe",
    description: "Frontend Developer",
    time: "05 min",
  },
  {
    id: 2,
    roomId: 2,
    status: "online",
    image: avatar03,
    name: "Percy Vere",
    description: "Backend Developer",
    time: "12 min",
  },
  {
    id: 3,
    roomId: 3,
    status: "online",
    name: "John Quil",
    description: "Project Manager",
    time: "24 min",
    isImg: true,
    profile: "K",
  },
  {
    id: 4,
    roomId: 4,
    status: "intermediate",
    image: avatar04,
    name: "Jane Doe",
    description: "Cloud Engineer",
    time: "1 hr",
  },
  {
    id: 5,
    roomId: 5,
    status: "offline",
    name: "Kwame Annan",
    description: "Cloud Engineer",
    time: "3 hrs",
    isImg: true,
    profile: "M",
  },
  {
    id: 6,
    roomId: 6,
    status: "online",
    image: avatar06,
    name: "Ansah Nana Kweku",
    description: "Data Analyst",
    time: "5 hrs",
  },
  {
    id: 7,
    roomId: 7,
    status: "online",
    name: "John Quil",
    description: "HR",
    time: "24 min",
    isImg: true,
    profile: "K",
  },
]

const groups = [
  { id: 1, image: "G", name: "General" },
  { id: 2, image: "R", name: "Reporting" },
  { id: 3, image: "M", name: "Meeting" },
  { id: 4, image: "A", name: "Project A" },
  { id: 5, image: "B", name: "Project B" },
]

const contacts = [
  {
    category: "A",
    child: [
      { id: 1, name: "Percy Vere" },
      { id: 2, name: "Alfonso Fisher" },
    ],
  },
  {
    category: "B",
    child: [{ id: 1, name: "Bonnie Harney" }],
  },
  {
    category: "C",
    child: [
      { id: 1, name: "Charles Brown" },
      { id: 2, name: "Carmella Jones" },
      { id: 3, name: "Carrie Williams" },
    ],
  },
  {
    category: "D",
    child: [{ id: 4, name: "Dolores Minter" }],
  },
]

const messages = [
  {
    id: 1,
    roomId: 1,
    sender: "John Doe",
    message: "Hello!",
    time: "10:00",
  },
  {
    id: 2,
    roomId: 1,
    sender: "Rey Disse",
    message: "Hi, How are you? What about our next meeting?",
    time: "10:02",
  },
  {
    id: 3,
    roomId: 1,
    sender: "John Doe",
    message: "Yeah everything is fine",
    time: "10:06",
  },
  {
    id: 4,
    roomId: 1,
    sender: "John Doe",
    message: "& Next meeting tomorrow 10.00AM",
    time: "10:06",
  },
  {
    id: 5,
    roomId: 1,
    sender: "Rey Disse",
    message: "Wow that's great",
    time: "10:07",
  },
  {
    id: 6,
    roomId: 2,
    sender: "Percy Vere",
    message: "Hello!",
    time: "11:00",
  },
  {
    id: 7,
    roomId: 3,
    sender: "John Quil",
    message: "Hello!",
    time: "11:02",
  },
  {
    id: 8,
    roomId: 4,
    sender: "Jane Doe",
    message: "Hello!",
    time: "1 hr",
  },
  {
    id: 9,
    roomId: 5,
    sender: "Kwame Annan",
    message: "Hello!",
    time: "11:05",
  },
  {
    id: 10,
    roomId: 6,
    sender: "Ansah Nana Kweku",
    message: "Hello!",
    time: "1 hr",
  },
  {
    id: 11,
    roomId: 7,
    sender: "John Quil",
    message: "Hello!",
    time: "1 hr",
  },
]

export { chats, messages, contacts, groups }
