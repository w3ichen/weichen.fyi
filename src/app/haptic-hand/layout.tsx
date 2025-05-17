import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haptic Hand | Weichen Qiu",
  description: "Haptic Hand: Engineering Haptic Interfaces Class Final Project",
};

interface Props {
  children: React.ReactNode;
}
export default function HapticHandLayout({ children }: Props) {
  return children;
}
