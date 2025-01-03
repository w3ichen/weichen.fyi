import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drivewyze | Weichen Qiu",
  description: "Drivewyze: Software for the trucking industry",
};

interface Props {
  children: React.ReactNode;
}
export default function DrivewyzeLayout({ children }: Props) {
  return children;
}
