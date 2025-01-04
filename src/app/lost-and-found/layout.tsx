import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lost & Found | Weichen Qiu",
  description: "Miscellaneous Projects & Experiences",
};

interface Props {
  children: React.ReactNode;
}
export default function LostAndFoundLayout({ children }: Props) {
  return children;
}
