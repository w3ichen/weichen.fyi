import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAlberta | Weichen Qiu",
  description: "Weichen @ University of Alberta",
};

interface Props {
  children: React.ReactNode;
}
export default function UAlbertaLayout({ children }: Props) {
  return children;
}
