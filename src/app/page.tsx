"use client";

import HeroImage from "@/components/HeroImage/HomeHeroImage";
import PageBase from "@/components/Page/PageBase";
import { PageContext, Role, ROLES } from "@/components/Page/PageContext";
import Timeline from "@/components/Timeline/Timeline";
import { Container } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function HomePage() {
  const [role, setRole] = React.useState<Role | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const roleParam = searchParams.get("is");
    if (roleParam && Object.values(ROLES).includes(roleParam as Role)) {
      setRole(roleParam as Role);
    } else {
      // Default role
      setRole(ROLES.ROBOTICIST);
    }
  }, [searchParams]);

  if (!role) return null;
  return (
    <PageContext.Provider value={{ role, setRole }}>
      <PageBase>
        <Container maxWidth="xl">
          <HeroImage />
          <Timeline />
        </Container>
      </PageBase>
    </PageContext.Provider>
  );
}
