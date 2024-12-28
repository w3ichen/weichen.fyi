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
  role: Role;
  setRole: (role: Role) => void;
}
export const PageContext = React.createContext<PageContextInterface>({
  role: ROLES.ROBOTICIST,
  setRole: () => {},
});
