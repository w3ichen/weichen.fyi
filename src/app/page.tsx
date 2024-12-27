"use client";

import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import { PageContext } from "@/constants/PageContext";
import React from "react";

export default function Home() {
  return (
    <PageContext.Provider value={{ role: "ROBOTICIST" }}>
      <div>
        <Nav />
        <main>main</main>
        <Footer />
      </div>
    </PageContext.Provider>
  );
}
