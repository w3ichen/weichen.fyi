import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vegmap Planner | Weichen Qiu",
  description:
    "Vegmap Planner: Planning Techniques for Robotics Class Final Project",
};

interface Props {
  children: React.ReactNode;
}
export default function VegmapPlannerLayout({ children }: Props) {
  return children;
}
