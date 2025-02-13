import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scona | Weichen Qiu",
  description: "Weichen @ Strathcona High School",
};

interface Props {
  children: React.ReactNode;
}
export default function SconaLayout({ children }: Props) {
  return children;
}
