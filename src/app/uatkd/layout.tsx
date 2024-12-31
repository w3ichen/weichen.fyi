import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TKD Club | Weichen Qiu",
  description: "UAlberta Taekwondo Club",
};

interface Props {
  children: React.ReactNode;
}
export default function UatkdtLayout({ children }: Props) {
  return children;
}
