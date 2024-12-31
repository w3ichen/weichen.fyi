import { TimelineDetail } from "../../components/Page/PageContext";

export const ROBOTICIST_DETAILS: TimelineDetail[] = [
  {
    company: "Robomechanics Lab @ CMU",
    position: "Patrick: Environmental Monitoring Robot",
    startDate: { year: 2024, month: 3 },
    endDate: "Present",
    logo: "roboticist/patrick_logo.jpg",
    location: "Pittsburgh, USA",
    skills: ["Robotics", "Python", "ROS1", "Gazebo", "RViz", "Linux"],
    url: "/patrick-robot",
  },
  {
    company: "Advanced Mechatronic Design Class @ CMU",
    position: "Hasselhoff Bot: Underwater Robot",
    startDate: { year: 2024, month: 10 },
    endDate: { year: 2024, month: 12 },
    logo: "roboticist/hasselhoff_bot_logo.jpg",
    location: "Pittsburgh, USA",
    skills: ["Robotics", "C", "Hardware", "Circuits", "Embedded", "Soldering"],
    url: "/hasselhoff-bot",
  },
  {
    company: "Robomechanics Lab @ CMU",
    position: "CESAR: Environmental Monitoring Robot",
    startDate: { year: 2024, month: 11 },
    endDate: "Present",
    logo: "roboticist/cesar_logo.png",
    location: "Pittsburgh, USA",
    skills: ["Robotics", "Python", "ROS1", "Hardware", "Linux"],
    url: "/cesar-robot",
  },
];
