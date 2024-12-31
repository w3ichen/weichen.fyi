import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Weichen Qiu",
  description: "Searching...",
};

interface Props {
  children: React.ReactNode;
}
export default function SearchLayout({ children }: Props) {
  return children;
}
