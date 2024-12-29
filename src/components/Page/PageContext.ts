import { ValueOf } from "next/dist/shared/lib/constants";
import React from "react";
import { Skill } from "../../constants/skills";

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
  endDate: { year: number; month: number } | undefined; // Undefined if present
  logo: string;
  location: string;
  skills: Skill[];
  url: string;
}

interface PageContextInterface {
  role: Role;
  setRole: (role: Role) => void;
}
export const PageContext = React.createContext<PageContextInterface>({
  role: ROLES.ROBOTICIST,
  setRole: () => {},
});
