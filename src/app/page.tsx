"use client";

import Footer from "@/components/Footer/Footer";
import HeroImage from "@/components/HeroImage/HeroImage";
import Nav from "@/components/Nav/Nav";
import Timeline from "@/components/Timeline/Timeline";
import { PageContext, Role, ROLES } from "@/constants/PageContext";
import { Container } from "@mui/material";
import React from "react";

export default function Home() {
  const [role, setRole] = React.useState<Role>(ROLES.ROBOTICIST);

  return (
    <PageContext.Provider value={{ role, setRole }}>
      <Nav />
      <Container maxWidth="xl">
        <HeroImage />
        <Timeline />
      </Container>
      <Footer />
    </PageContext.Provider>
  );
}
