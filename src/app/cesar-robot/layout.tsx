import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CESAR Robot | Weichen Qiu",
  description: "CESAR: Environmental Monitoring Robot",
};

interface Props {
  children: React.ReactNode;
}
export default function CesarRobotLayout({ children }: Props) {
  return children;
}
