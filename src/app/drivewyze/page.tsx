"use client";

import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { DRIVEWYZE_SKILLS } from "@/constants/skills";
import { Container, styled } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

export default function DrivewyzePage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo title="Drivewyze" imgSrc="swe/drivewyze_logo2.png" />
      <HeroImageBase src="swe/drivewyze_hero.jpg" sx={{ height: "300px" }} />

      <ProjectMetadata
        skills={DRIVEWYZE_SKILLS}
        buttons={[
          {
            url: "https://drivewyze.com",
            text: "drivewyze.com",
            type: "web",
          },
        ]}
      />

      <CaptionedImage
        src="swe/drivewyze_hub.png"
        title="Drivewyze Hub"
        caption="I worked as a front-end developer on the Hub, a truck fleet management platform by Drivewyze, the nation's largest truck weigh station bypass service. The Hub enables fleet operators to monitor real-time safety alerts, track driver speeds, and manage vehicles in the database. The platform features interactive dashboards, tables, and maps to visualize real-time data and provide data-driven insights."
        links={[
          {
            url: "https://hub.drivewyze.com/login",
            text: "[Web] Drivewyze Hub Website",
          },
        ]}
        unconstrained
      />
      <CaptionedImage
        src="swe/drivewyze_hub_jira.jpg"
        title="Jedi Knight"
        caption="I worked closely with product managers to discuss and demo new features, resolved bugs identified by QA testers, refined the web design based on UX designer's feedback, and conducted code reviews for other developers. Actively involved in the agile development process, I even onboarded a new developer. By the end, I was promoted to Jedi Knight and became the go-to expert on the codebase."
        imgPosition="right"
        mt={2}
      />
    </Root>
  );
}
