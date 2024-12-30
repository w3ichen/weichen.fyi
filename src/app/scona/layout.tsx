import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weichen Qiu | Scona",
  description: "Weichen @ Strathcona High School",
};

interface Props {
  children: React.ReactNode;
}
export default function SconaLayout({ children }: Props) {
  return children;
}
