import { ValueOf } from "next/dist/shared/lib/constants";
import React from "react";
import { Skill } from "../SkillChip/constants";
import { ROBOTICIST_DETAILS } from "@/constants/roles/roboticist";
import { STUDENT_DETAILS } from "@/constants/roles/student";
import { CREATOR_DETAILS } from "@/constants/roles/creator";
import { ENTREPRENEUR_DETAILS } from "@/constants/roles/entrepreneur";

export const ROLES = {
  ROBOTICIST: "roboticist",
  ENTREPRENEUR: "entrepreneur",
  SWE: "swe", // SWE = Software Engineer"
  STUDENT: "student",
  CREATOR: "creator",
};
export type Role = ValueOf<typeof ROLES>;

export interface TimelineDetail {
  company: string;
  position: string;
  startDate: { year: number; month: number };
  endDate: { year: number; month: number } | "Present";
  logo?: string;
  location: string;
  skills: Skill[];
  url: string;
}

interface PageContextInterface {
  role: Role | null;
  setRole: (role: Role) => void;
}
export const PageContext = React.createContext<PageContextInterface>({
  role: null,
  setRole: () => {},
});

export const DEFAULT_ROLE = ROLES.ROBOTICIST;

export const TIMELINE_DETAILS: { [role: Role]: TimelineDetail[] } = {
  [ROLES.ROBOTICIST]: ROBOTICIST_DETAILS,
  [ROLES.ENTREPRENEUR]: ENTREPRENEUR_DETAILS,
  [ROLES.SWE]: STUDENT_DETAILS,
  [ROLES.STUDENT]: STUDENT_DETAILS,
  [ROLES.CREATOR]: CREATOR_DETAILS,
};
export const HOME_HERO: { [role: Role]: { cover: string; profile: string } } = {
  [ROLES.ROBOTICIST]: {
    cover: "home/roboticist_cover.jpg",
    profile: "home/roboticist_profile.jpg",
  },
  [ROLES.ENTREPRENEUR]: {
    cover: "home/entrepreneur_cover.jpg",
    profile: "home/entrepreneur_profile.jpg",
  },
  [ROLES.SWE]: {
    cover: "home/swe_cover.png",
    profile: "home/swe_profile.jpg",
  },
  [ROLES.STUDENT]: {
    cover: "home/student_cover.jpg",
    profile: "home/student_profile.jpg",
  },
  [ROLES.CREATOR]: {
    cover: "home/creator_cover.jpg",
    profile: "home/creator_profile.jpg",
  },
};
