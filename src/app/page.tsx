"use client";

import HomeHeroImage from "@/components/HeroImage/HomeHeroImage";
import {
  DARK_MODE_ROLES,
  DEFAULT_ROLE,
  PageContext,
  Role,
  ROLES,
} from "@/components/Page/PageContext";
import Timeline from "@/components/Timeline/Timeline";
import TimelineFooter from "@/components/Timeline/TimelineFooter";
import { ALL_TIMELINE_DETAILS, TIMELINE_DETAILS } from "@/constants/timeline";
import { Container, useColorScheme } from "@mui/material";
import { get } from "lodash";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function HomePage() {
  const searchParams = useSearchParams();
  const { role, setRole } = React.useContext(PageContext);
  const { setMode } = useColorScheme();

  const timelineEntries = get(TIMELINE_DETAILS, role || "", []).map(
    (key) => ALL_TIMELINE_DETAILS[key]
  );

  const onPageLoad = () => {
    const roleParam = searchParams.get("is");
    let newRole: Role = DEFAULT_ROLE; // If role is not set, use default role for home page
    // (1) If role in search param is valid, set role to that
    if (roleParam && Object.values(ROLES).includes(roleParam as Role)) {
      newRole = roleParam as Role;
    }
    setRole(newRole);
    // Set theme
    if (DARK_MODE_ROLES.includes(newRole)) {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    onPageLoad();
  }, []);

  return (
    <Container maxWidth="xl">
      <HomeHeroImage role={role} />
      <Timeline details={timelineEntries} />
      <TimelineFooter role={role} />
    </Container>
  );
}
