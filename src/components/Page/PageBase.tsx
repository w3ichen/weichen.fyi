"use client";

import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { PageContext, Role } from "./PageContext";

interface Props {
  children: React.ReactNode;
}
export default function PageBase({ children }: Props) {
  const [role, setRole] = React.useState<Role | null>(null);

  return (
    <PageContext.Provider value={{ role, setRole }}>
      <div>
        <Nav />
        {children}
        <Footer />
      </div>
    </PageContext.Provider>
  );
}
