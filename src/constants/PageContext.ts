import React from "react";

export const ROLES = {
  ROBOTICIST: { short: "roboticist", long: "the Roboticist" },
  ENTREPRENEUR: { short: "entrepreneur", long: "the Entrepreneur" },
  SWE: { short: "SWE", long: "the Software Engineer" },
  STUDENT: { short: "student", long: "the Student" },
  CREATOR: { short: "creator", long: "the Creator" },
};
export type Role = keyof typeof ROLES;

interface PageContextInterface {
  role: Role;
}
export const PageContext = React.createContext<PageContextInterface>({
  role: "ROBOTICIST",
});
