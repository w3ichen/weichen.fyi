import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export default function LinkNewTab({
  href,
  children,
  ...rest
}: { href: string; children: ReactNode } & LinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </Link>
  );
}
