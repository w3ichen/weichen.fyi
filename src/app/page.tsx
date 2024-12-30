"use client";

import HeroImage from "@/components/HeroImage/HomeHeroImage";
import { PageContext, Role, ROLES } from "@/components/Page/PageContext";
import Timeline from "@/components/Timeline/Timeline";
import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function HomePage() {
  const searchParams = useSearchParams();
  const { role, setRole } = React.useContext(PageContext);

  const onPageLoad = () => {
    const roleParam = searchParams.get("is");
    // (1) If role in search param is valid, set role to that
    if (roleParam && Object.values(ROLES).includes(roleParam as Role)) {
      setRole(roleParam as Role);
    } else if (!role) {
      // (2) If role is not set, use default role for home page
      setRole(ROLES.ROBOTICIST);
    }
  };

  useEffect(() => {
    onPageLoad();
  }, []);

  return (
    <Container maxWidth="xl">
      <HeroImage />
      <Timeline />
    </Container>
  );
}
