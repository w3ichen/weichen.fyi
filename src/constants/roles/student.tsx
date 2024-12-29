import { TimelineDetail } from "../../components/Page/PageContext";

export const student_details: TimelineDetail[] = [
  {
    company: "Carnegie Mellon University",
    position: "MS in Electrical and Computer Engineering",
    startDate: { year: 2024, month: 1 },
    endDate: { year: 2025, month: 5 },
    logo: "student/cmu_logo.jpg",
    location: "Pittsburgh, USA",
    skills: ["Robotics", "CS", "AI"],
    url: "/cmu",
  },
  {
    company: "University of Alberta",
    position: "BSc in Computer Engineering Co-op",
    startDate: { year: 2018, month: 9 },
    endDate: { year: 2023, month: 6 },
    logo: "student/ualberta_logo.jpg",
    location: "Edmonton, Canada",
    skills: ["CS", "EE", "CivE", "BME"],
    url: "/ualberta",
  },
  {
    company: "Strathcona High School",
    position: "High School Diploma",
    startDate: { year: 2015, month: 9 },
    endDate: { year: 2018, month: 6 },
    logo: "student/scona_logo.jpg",
    location: "Edmonton, Canada",
    skills: ["AP", "Athletics", "Volunteering"],
    url: "/scona",
  },
];
