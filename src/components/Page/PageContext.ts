import { ValueOf } from "next/dist/shared/lib/constants";
import React from "react";

export const ROLES = {
  ROBOTICIST: "roboticist",
  ENTREPRENEUR: "entrepreneur",
  SWE: "swe", // SWE = Software Engineer"
  STUDENT: "student",
  CREATOR: "creator",
};
export type Role = ValueOf<typeof ROLES>;

interface PageContextInterface {
  role: Role | null;
  setRole: (role: Role) => void;
}
export const PageContext = React.createContext<PageContextInterface>({
  role: null,
  setRole: () => {},
});

export const DEFAULT_ROLE = ROLES.ROBOTICIST;

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
