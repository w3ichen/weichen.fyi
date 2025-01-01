import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MecSimCalc | Weichen Qiu",
  description:
    "MecSimCalc: The simplest way to build and share computational tools",
};

interface Props {
  children: React.ReactNode;
}
export default function MecSimCalcLayout({ children }: Props) {
  return children;
}
