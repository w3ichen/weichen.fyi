"use client";

import { ROLES } from "@/components/Page/PageContext";
import Timeline from "@/components/Timeline/Timeline";
import { ALL_TIMELINE_DETAILS, TIMELINE_DETAILS } from "@/constants/timeline";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
}));

export default function LostAndFoundPage() {
  const timelineEntries = TIMELINE_DETAILS[ROLES.LOST].map(
    (key) => ALL_TIMELINE_DETAILS[key]
  );

  return (
    <Root maxWidth="lg">
      <Typography variant="h4">Lost & Found</Typography>
      <Timeline details={timelineEntries} />
    </Root>
  );
}
