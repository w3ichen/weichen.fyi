import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patrick Robot | Weichen Qiu",
  description: "Patrick: Environmental Monitoring Robot",
};

interface Props {
  children: React.ReactNode;
}
export default function PatrickRobotLayout({ children }: Props) {
  return children;
}
