import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huawei | Weichen Qiu",
  description: "Huawei Canada, Edmonton R&D Centre, AI Research",
};

interface Props {
  children: React.ReactNode;
}
export default function HuaweiLayout({ children }: Props) {
  return children;
}
