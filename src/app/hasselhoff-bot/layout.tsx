import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hasselhoff Bot | Weichen Qiu",
  description:
    "Hasselhoff Bot: Advanced Mechatronic Design Class Final Project",
};

interface Props {
  children: React.ReactNode;
}
export default function HasselhoffBotLayout({ children }: Props) {
  return children;
}
