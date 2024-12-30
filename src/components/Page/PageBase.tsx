"use client";

import Link, { LinkProps } from "next/link";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { ReactNode } from "react";
import { PageContext, Role } from "./PageContext";
import React from "react";

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

export const LinkNewTab = ({
  href,
  children,
  ...rest
}: { href: string; children: ReactNode } & LinkProps) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </Link>
);
