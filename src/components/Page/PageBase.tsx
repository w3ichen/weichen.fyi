"use client";

import Link, { LinkProps } from "next/link";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}
export default function PageBase({ children }: Props) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
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
