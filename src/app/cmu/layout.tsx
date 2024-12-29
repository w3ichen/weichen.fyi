import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weichen Qiu | CMU",
  description: "Weichen @ Carnegie Mellon University",
};

interface Props {
  children: React.ReactNode;
}
export default function CmuLayout({ children }: Props) {
  return children;
}
