import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BackSCNR | Weichen Qiu",
  description:
    "BackSCNR: Scoliosis Evaluation and Treatment using Surface Topography",
};

interface Props {
  children: React.ReactNode;
}
export default function BackSCNRLayout({ children }: Props) {
  return children;
}
