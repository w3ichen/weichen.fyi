import { Role, ROLES } from "@/components/Page/PageContext";
import { Skill } from "@/components/SkillChip/constants";
import * as skills from "./skills";

export interface TimelineDetail {
  company: string;
  position: string;
  startDate: { year: number; month: number };
  endDate: { year: number; month: number } | "Present";
  logo?: string;
  location: string;
  skills_meta: Skill[];
  skills: Skill[];
  url: string;
}

export type TimelineDetailsKey =
  | "w3ichen.github.io"
  | "uatkd_social"
  | "backscnr"
  | "mecsimcalc"
  | "uatkd_prez"
  | "patrick_robot"
  | "hasselhoff_bot"
  | "cesar_robot"
  | "cmu"
  | "ualberta"
  | "scona"
  | "huawei"
  | "drivewyze"
  | "ualberta_eng"
  | "weichen.fyi";

export const TIMELINE_DETAILS: { [role: Role]: TimelineDetailsKey[] } = {
  [ROLES.ROBOTICIST]: ["patrick_robot", "hasselhoff_bot", "cesar_robot"],
  [ROLES.ENTREPRENEUR]: ["mecsimcalc", "backscnr", "uatkd_prez"],
  [ROLES.SWE]: [
    "backscnr",
    "mecsimcalc",
    "huawei",
    "drivewyze",
    "ualberta_eng",
    "weichen.fyi",
  ],
  [ROLES.STUDENT]: ["cmu", "ualberta", "scona"],
  [ROLES.CREATOR]: ["w3ichen.github.io", "uatkd_social"],
};

export const ALL_TIMELINE_DETAILS: Record<TimelineDetailsKey, TimelineDetail> =
  {
    "w3ichen.github.io": {
      company: "w3ichen.github.io",
      position: "Portfolio Website v1",
      startDate: { year: 2019, month: 11 },
      endDate: { year: 2021, month: 7 },
      location: "Edmonton, Canada",
      skills_meta: skills.W3ICHEN_GITHUB_IO_SKILLS_META,
      skills: skills.W3ICHEN_GITHUB_IO_SKILLS_META,
      url: "https://w3ichen.github.io",
    },
    backscnr: {
      company: "Chief Technology Officer (CTO)",
      position: "BackSCNR",
      startDate: { year: 2021, month: 8 },
      endDate: "Present",
      logo: "entrepreneur/backscnr_logo.jpg",
      location: "Edmonton, Canada",
      skills_meta: skills.BACKSCNR_SKILLS_META,
      skills: skills.BACKSCNR_SKILLS,
      url: "/backscnr",
    },
    mecsimcalc: {
      company: "Co-founder, Chief Technology Officer (CTO)",
      position: "MecSimCalc",
      startDate: { year: 2021, month: 6 },
      endDate: "Present",
      logo: "entrepreneur/mecsimcalc_logo.jpg",
      location: "Edmonton, Canada",
      skills_meta: skills.MECSIMCALC_SKILLS_META,
      skills: skills.MECSIMCALC_SKILLS,
      url: "/mecsimcalc",
    },
    uatkd_prez: {
      company: "UAlberta Taekwondo Club",
      position: "President",
      startDate: { year: 2022, month: 5 },
      endDate: { year: 2023, month: 4 },
      logo: "creator/uatkd_logo.jpg",
      location: "Edmonton, Canada",
      skills_meta: skills.UATKD_PREZ_SKILLS_META,
      skills: skills.UATKD_SKILLS,
      url: "/uatkd",
    },
    uatkd_social: {
      company: "UAlberta Taekwondo Club",
      position: "Social Media Coordinator",
      startDate: { year: 2020, month: 2 },
      endDate: { year: 2022, month: 4 },
      logo: "creator/uatkd_logo.jpg",
      location: "Edmonton, Canada",
      skills_meta: skills.UATKD_SOCIAL_SKILLS_META,
      skills: skills.UATKD_SKILLS,
      url: "/uatkd",
    },
    patrick_robot: {
      company: "Robomechanics Lab @ CMU",
      position: "Patrick: Environmental Monitoring Robot",
      startDate: { year: 2024, month: 3 },
      endDate: "Present",
      logo: "roboticist/patrick_logo.jpg",
      location: "Pittsburgh, USA",
      skills_meta: skills.PATRICK_ROBOT_SKILLS_META,
      skills: skills.PATRICK_ROBOT_SKILLS,
      url: "/patrick-robot",
    },
    hasselhoff_bot: {
      company: "Advanced Mechatronic Design Class @ CMU",
      position: "Hasselhoff Bot: Underwater Robot",
      startDate: { year: 2024, month: 10 },
      endDate: { year: 2024, month: 12 },
      logo: "roboticist/hasselhoff_bot_logo.jpg",
      location: "Pittsburgh, USA",
      skills_meta: skills.HASSELHOFF_BOT_SKILLS_META,
      skills: skills.HASSELHOFF_BOT_SKILLS,
      url: "/hasselhoff-bot",
    },
    cesar_robot: {
      company: "Robomechanics Lab @ CMU",
      position: "CESAR: Environmental Monitoring Robot",
      startDate: { year: 2024, month: 11 },
      endDate: "Present",
      logo: "roboticist/cesar_logo.png",
      location: "Pittsburgh, USA",
      skills_meta: skills.CESAR_ROBOT_SKILLS_META,
      skills: skills.CESAR_ROBOT_SKILLS,
      url: "/cesar-robot",
    },
    cmu: {
      company: "Carnegie Mellon University",
      position: "MS in Electrical and Computer Engineering",
      startDate: { year: 2024, month: 1 },
      endDate: { year: 2025, month: 5 },
      logo: "student/cmu_logo.jpg",
      location: "Pittsburgh, USA",
      skills_meta: skills.CMU_SKILLS_META,
      skills: skills.CMU_SKILLS_META,
      url: "/cmu",
    },
    ualberta: {
      company: "University of Alberta",
      position: "BSc in Computer Engineering Co-op",
      startDate: { year: 2018, month: 9 },
      endDate: { year: 2023, month: 6 },
      logo: "student/ualberta_logo.jpg",
      location: "Edmonton, Canada",
      skills_meta: skills.UALBERTA_SKILLS_META,
      skills: skills.UALBERTA_SKILLS_META,
      url: "/ualberta",
    },
    scona: {
      company: "Strathcona High School",
      position: "High School Diploma",
      startDate: { year: 2015, month: 9 },
      endDate: { year: 2018, month: 6 },
      logo: "student/scona_logo.jpg",
      location: "Edmonton, Canada",
      skills_meta: skills.SCONA_SKILLS_META,
      skills: skills.SCONA_SKILLS_META,
      url: "/scona",
    },
    huawei: {
      company: "Huawei Canada",
      position: "AI Researcher Intern",
      startDate: { year: 2022, month: 5 },
      endDate: { year: 2022, month: 12 },
      logo: "swe/huawei_logo.jpg",
      location: "Edmonton, Canada",
      skills_meta: skills.HUAWEI_SKILLS_META,
      skills: skills.HUAWEI_SKILLS,
      url: "/huawei",
    },
    drivewyze: {
      company: "Drivewyze",
      position: "Software Developer Intern",
      startDate: { year: 2021, month: 1 },
      endDate: { year: 2021, month: 8 },
      logo: "swe/drivewyze_logo.jpg",
      location: "Edmonton, Canada",
      skills_meta: skills.DRIVEWYZE_SKILLS_META,
      skills: skills.DRIVEWYZE_SKILLS,
      url: "/drivewyze",
    },
    ualberta_eng: {
      company: "University of Alberta Engineering",
      position: "Research Assistant",
      startDate: { year: 2020, month: 6 },
      endDate: { year: 2023, month: 12 },
      logo: "swe/ualberta_eng_logo.jpg",
      location: "Edmonton, Canada",
      skills_meta: skills.UALBERTA_ENG_SKILLS_META,
      skills: skills.UALBERTA_ENG_SKILLS,
      url: "/ualberta-eng",
    },
    "weichen.fyi": {
      company: "weichen.fyi Github",
      position: "Portfolio Website v2",
      startDate: { year: 2024, month: 12 },
      endDate: { year: 2025, month: 1 },
      location: "Edmonton, Canada",
      skills_meta: skills.WEICHEN_FYI_SKILLS_META,
      skills: skills.WEICHEN_FYI_SKILLS_META,
      url: "https://github.com/w3ichen/weichen.fyi",
    },
  };
