import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAlberta Eng | Weichen Qiu",
  description: "University of Alberta Engineering",
};

interface Props {
  children: React.ReactNode;
}
export default function UAlbertaEngLayout({ children }: Props) {
  return children;
}
