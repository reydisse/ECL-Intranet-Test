//import Images
import avatar1 from "assets/images/users/avatar-1.jpg"
import avatar2 from "assets/images/users/avatar-2.jpg"
import avatar3 from "assets/images/users/avatar-3.jpg"
import avatar4 from "assets/images/users/avatar-4.jpg"
import avatar5 from "assets/images/users/avatar-5.jpg"
import avatar6 from "assets/images/users/avatar-6.jpg"
import avatar8 from "assets/images/users/avatar-8.jpg"

const projects = [
  {
    id: 1,
    img: "img2",
    name: "Project A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat consequat massa, sed tristique turpis ultrices at.",
    status: "Pending",
    color: "warning",
    dueDate: "22 Mar, 23",
    commentsCount: 183,
    team: [
      { id: 1, img: "avatar8" },
      { id: 2, img: "avatar2", fullname: "Daniel Candles" },
    ],
    startDate: "13 Apr, 2023",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "ECL Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "ECL Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "ECL Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 2,
    img: "img3",
    name: "Project B",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat consequat massa, sed tristique turpis ultrices at. ",
    status: "Delay",
    color: "danger",
    dueDate: "13 Apr, 23",
    commentsCount: 175,
    team: [
      {
        id: 1,
        img: "Null",
        name: "K",
        color: "info",
        fullname: "Kony Brafford",
      },
      { id: 2, img: "avatar2", fullname: "Daniel Candles" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "ECL Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "ECL Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "ECL Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 3,
    img: "img4",
    name: "Project C",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat consequat massa, sed tristique turpis ultrices at. ",
    status: "Completed",
    color: "success",
    dueDate: "14 May, 22",
    commentsCount: 202,
    team: [
      { id: 1, img: "avatar1", fullname: "Janice Cole" },
      { id: 2, img: "avatar6", fullname: "Janice Cole" },
      { id: 3, img: "avatar7", fullname: "Janice Cole" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "ECL Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "ECL Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "ECL Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 4,
    img: "img5",
    name: "Project D",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat consequat massa, sed tristique turpis ultrices at.",
    status: "Completed",
    color: "success",
    dueDate: "13 Feb, 23",
    commentsCount: 194,
    team: [
      { id: 1, img: "avatar1", fullname: "Jennifer Walker" },
      { id: 2, img: "avatar3", fullname: "Daniel Candel" },
      { id: 3, img: "Null", name: "3+", color: "danger" },
    ],
    startDate: "08 Feb, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "ECL Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "ECL Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "ECL Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 5,
    img: "img6",
    name: "Project E",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat consequat massa, sed tristique turpis ultrices at. ",
    status: "Pending",
    color: "warning",
    dueDate: "24 Jan, 23",
    commentsCount: 122,
    team: [
      { id: 1, img: "avatar4", fullname: "Janice Cole" },
      { id: 2, img: "avatar5", fullname: "Steve Foster" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "ECL Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "ECL Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "ECL Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 6,
    img: "img3",
    name: "Project J",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat consequat massa, sed tristique turpis ultrices at.",
    status: "Delay",
    color: "danger",
    dueDate: "15 Oct, 19",
    commentsCount: 214,
    team: [
      { id: 1, img: "avatar5", fullname: "Steve Foster" },
      {
        id: 3,
        img: "Null",
        name: "R",
        color: "warning",
        fullname: "Rony Candles",
      },
    ],
  },
  {
    id: 7,
    img: "img4",
    name: "Project K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat consequat massa, sed tristique turpis ultrices at. ",
    status: "Completed",
    color: "success",
    dueDate: "11 Oct, 19",
    commentsCount: 185,
    team: [
      { id: 1, img: "Null", name: "L", color: "pink", fullname: "Lony Mackay" },
      { id: 3, img: "avatar2", fullname: "Daniel Candles" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "ECL Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "ECL Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "ECL Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 8,
    img: "img2",
    name: "Project L",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat consequat massa, sed tristique turpis ultrices at. ",
    status: "Completed",
    color: "success",
    dueDate: "12 Oct, 19",
    commentsCount: 106,
    team: [
      { id: 1, img: "avatar4", fullname: "Janice Cole" },
      { id: 2, img: "avatar5", fullname: "Steve Foster" },
      {
        id: 3,
        img: "Null",
        name: "A",
        color: "success",
        fullname: "Aeffrey Walker",
      },
      { id: 3, img: "avatar2", fullname: "Daniel Candles" },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "ECL Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "ECL Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "ECL Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
  {
    id: 9,
    img: "img1",
    name: "Project M",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat consequat massa, sed tristique turpis ultrices at. ",
    status: "Completed",
    color: "success",
    dueDate: "15 Oct, 19",
    commentsCount: 214,
    team: [
      {
        id: 1,
        img: "avatar4",
        fullname: "Janice Cole",
        skills: [
          { id: 1, name: "Frontend" },
          { id: 2, name: "UI" },
        ],
      },
      {
        id: 2,
        img: "avatar5",
        fullname: "Steve Foster",
        skills: [{ id: 1, name: "UI/UX" }],
      },
      {
        id: 3,
        img: "Null",
        name: "A",
        color: "success",
        fullname: "Aeffrey Walker",
        skills: [{ id: 1, name: "Backend" }],
      },
      {
        id: 4,
        img: "avatar2",
        fullname: "Daniel Candles",
        skills: [
          { id: 1, name: "Frontend" },
          { id: 2, name: "UI" },
        ],
      },
    ],
    startDate: "08 Sept, 2019",
    projectDetails: {
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,",
      points: [
        "To achieve this, it would be necessary",
        "Separate existence is a myth.",
        "If several languages coalesce",
      ],
    },
    files: [
      { name: "ECL Landing.Zip", size: "3.25 MB", link: "#" },
      { name: "ECL Admin.Zip", size: "3.15 MB", link: "#" },
      { name: "ECL Logo.Zip", size: "2.02 MB", link: "#" },
      { name: "Veltrix admin.Zip", size: "2.25 MB", link: "#" },
    ],
    comments: [
      {
        id: 1,
        username: "David Lambert",
        userImg: "avatar2",
        comment: "Separate existence is a myth.",
      },
      {
        id: 2,
        username: "Steve Foster",
        userImg: "avatar3",
        comment: "@Henry To an English person it will like simplified",
        reply: {
          username: "Jeffrey Walker",
          comment: "as a skeptical Cambridge friend",
        },
      },
      {
        id: 3,
        username: "Steven Carlson",
        comment: " Separate existence is a myth.",
      },
    ],
  },
]

const options = {
  chart: {
    height: 290,
    type: "bar",
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "14%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: !1,
  },
  series: [
    {
      name: "Overview",
      data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
    },
  ],
  grid: {
    yaxis: {
      lines: {
        show: !1,
      },
    },
  },
  yaxis: {
    title: {
      text: "% (Percentage)",
    },
  },
  xaxis: {
    labels: {
      rotate: -90,
    },
    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    title: {
      text: "Week",
    },
  },
  colors: ["#556ee6"],
}

const series = [
  {
    name: "Overview",
    data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
  },
]

const projectListData = [
  {
    id: 1,
    img: "",
    name: "New admin Design",
    description: "It will be as simple as Occidental",
    dueDate: "15 Oct, 19",
    status: "Completed",
    color: "success",
    isProfile: true,

    team: [
      {
        id: 1,
        img: avatar4,
      },
      {
        id: 2,
        img: avatar5,
      },
      {
        id: 3,
        profile: "A",
        profileColor: "success",
      },
      {
        id: 4,
        img: avatar2,
      },
    ],
  },
  {
    id: 2,
    img: "",
    name: "Brand logo design",
    description: "To achieve it would be necessary",
    dueDate: "22 Oct, 19",
    status: "Pending",
    color: "warning",
    team: [
      { id: 1, img: avatar1 },
      { id: 2, img: avatar3 },
    ],
  },
  {
    id: 3,
    img: "",
    name: "New Landing Design",
    description: "For science, music, sport, etc",
    dueDate: "13 Oct, 19",
    status: "Delay",
    color: "danger",
    team: [
      { id: 1, img: avatar3 },
      { id: 2, img: avatar8 },
      { id: 2, img: avatar6 },
    ],
  },
  {
    id: 4,
    img: "",
    name: "Redesign - Landing page",
    description: "If several languages coalesce",
    dueDate: "14 Oct, 19",
    status: "Completed",
    color: "success",
    team: [
      { id: 1, img: avatar5 },
      {
        id: 2,
        profile: "R",
        profileColor: "warning",
      },
      { id: 3, img: avatar2 },
    ],
  },
  {
    id: 5,
    img: "",
    name: "ECL Dashboard UI",
    description: "Separate existence is a myth",
    dueDate: "22 Oct, 19",
    status: "Completed",
    color: "success",
    team: [
      { id: 1, img: avatar4 },
      { id: 2, img: avatar1 },
    ],
  },
  {
    id: 6,
    img: "",
    name: "Blog Template UI",
    description: "For science, music, sport, etc",
    dueDate: "24 Oct, 19",
    status: "Pending",
    color: "warning",
    team: [
      {
        id: 1,
        profile: "A",
        profileColor: "danger",
      },
      { id: 2, img: avatar2 },
    ],
  },
  {
    id: 7,
    img: "",
    name: "Multipurpose Landing",
    description: "It will be as simple as Occidental",
    dueDate: "15 Oct, 19",
    status: "Delay",
    color: "danger",
    team: [
      { id: 1, img: avatar4 },
      { id: 2, img: avatar5 },
      { id: 3, img: avatar2 },
    ],
  },
]

const OverviewTeamMember = [
  {
    id: 1,
    img: avatar2,
    title: "Daniel Canales",
    label_1: "Frontend",
    label_2: "UI",
  },
  {
    id: 2,
    img: avatar1,
    title: "Jennifer Walker",
    label_1: "UI / UX",
  },
  {
    id: 3,
    title: "Carl Mackay",
    label_1: "Backend",
    profile: "C",
  },
  {
    id: 4,
    img: avatar4,
    title: "Janice Cole",
    label_1: "Frontend",
    label_2: "UI",
  },
  {
    id: 4,
    title: "Tony Brafford",
    label_1: "Backend",
    profile: "T",
  },
]
export { projects, options, series, projectListData, OverviewTeamMember }
