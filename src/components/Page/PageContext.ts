import { ValueOf } from "next/dist/shared/lib/constants";
import React from "react";
import { Skill } from "../SkillChip/constants";
import { ROBOTICIST_DETAILS } from "@/constants/roles/roboticist";
import { STUDENT_DETAILS } from "@/constants/roles/student";
import { CREATOR_DETAILS } from "@/constants/roles/creator";

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

export const TIMELINE_DETAILS: { [role: Role]: TimelineDetail[] } = {
  [ROLES.ROBOTICIST]: ROBOTICIST_DETAILS,
  [ROLES.ENTREPRENEUR]: STUDENT_DETAILS,
  [ROLES.SWE]: STUDENT_DETAILS,
  [ROLES.STUDENT]: STUDENT_DETAILS,
  [ROLES.CREATOR]: CREATOR_DETAILS,
};
