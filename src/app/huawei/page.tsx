"use client";

import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

export default function HuaweiPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo title="Huawei Canada" imgSrc="swe/huawei_logo2.png" />
      <HeroImageBase src="swe/huawei_hero.jpg" sx={{ height: "300px" }} />

      <ProjectMetadata
        skills={[
          "AI",
          "Research",
          "CS",
          "Python",
          "PyTorch",
          "Linux",
          "NVIDIA CUDA",
          "Anaconda",
          "Draw.io",
          "Git",
          "Overleaf",
          "Markdown",
        ]}
        buttons={[
          {
            url: "https://www.huawei.com/ca",
            text: "huawei.com/ca",
            type: "web",
          },
        ]}
      />
    </Root>
  );
}
