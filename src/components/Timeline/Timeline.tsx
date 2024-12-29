import {
  PageContext,
  Role,
  ROLES,
  TimelineDetail,
} from "@/components/Page/PageContext";
import { student_details } from "@/constants/roles/student";
import MuiTimeline from "@mui/lab/Timeline";
import React from "react";
import TimelineEntry from "./TimelineEntry";

const roles_details: { [role: Role]: TimelineDetail[] } = {
  [ROLES.ROBOTICIST]: student_details,
  [ROLES.ENTREPRENEUR]: student_details,
  [ROLES.SWE]: student_details,
  [ROLES.STUDENT]: student_details,
  [ROLES.CREATOR]: student_details,
};

export default function Timeline() {
  const { role } = React.useContext(PageContext);
  const role_detail = roles_details[role];

  return (
    <MuiTimeline position="right" sx={{ mt: 1, mb: 6, p: 0 }}>
      {role_detail.map((detail, index) => (
        <TimelineEntry key={`timeline-entry-${index}`} {...detail} />
      ))}
    </MuiTimeline>
  );
}
