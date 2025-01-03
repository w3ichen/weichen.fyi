"use client";

import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

export default function DrivewyzePage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo title="Drivewyze" imgSrc="swe/drivewyze_logo2.png" />
      <HeroImageBase src="swe/drivewyze_hero.jpg" sx={{ height: "300px" }} />

      <ProjectMetadata
        skills={[
          "WebDev",
          "NextJS",
          "ReactJS",
          "ReduxJS",
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "Material UI",
          "Git",
          "Figma",
          "Jira",
        ]}
        buttons={[
          {
            url: "https://drivewyze.com",
            text: "drivewyze.com",
            type: "web",
          },
        ]}
      />
    </Root>
  );
}
