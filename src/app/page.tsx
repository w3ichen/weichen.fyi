"use client";

import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import { PageContext, Role } from "@/constants/PageContext";
import React from "react";

export default function Home() {
  const [role, setRole] = React.useState<Role>("ROBOTICIST");

  return (
    <PageContext.Provider value={{ role, setRole }}>
      <Nav />
      <main style={{ backgroundColor: "red", height: "150vh" }}>main</main>

      <Footer />
    </PageContext.Provider>
  );
}
