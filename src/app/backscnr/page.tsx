"use client";

import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

export default function BackSCNRPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo
        title="BackSCNR"
        imgSrc="entrepreneur/backscnr_logo2.jpg"
      />
      <HeroImageBase
        src="entrepreneur/backscnr_hero.jpg"
        sx={{ height: "300px" }}
      />

      <ProjectMetadata
        skills={[
          "Healthcare",
          "Startup",
          "BME",
          "CS",
          "AI",
          "PyTorch",
          "TensorFlow",
          "WebDev",
          "Python",
          "Django",
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "ReactJS",
          "NextJS",
          "Material UI",
          "SQL",
          "PostgreSQL",
          "Stripe",
          "3D",
          "ThreeJS",
          "Open3D",
          "Trimesh",
          "Cloud Computing",
          "AWS",
          "DigitalOcean",
          "iOS",
          "Kubernetes",
          "Linux",
          "Docker",
          "Leadership",
          "Social Media",
          "Negotiation",
        ]}
        buttons={[
          {
            url: "https://apps.apple.com/us/app/backscnr/id1629230768",
            text: "iOS app",
            type: "appstore",
          },
          {
            url: "https://www.linkedin.com/company/backscnr",
            text: "@backscnr",
            type: "linkedin",
          },
          {
            url: "https://www.youtube.com/@backscnr4731",
            text: "@backscnr4731",
            type: "youtube",
          },
          {
            url: "https://www.instagram.com/backscnr",
            text: "@backscnr",
            type: "instagram",
          },
          {
            url: "https://github.com/BackSCNR",
            text: "BackSCNR",
            type: "github",
          },
          {
            url: "https://backscnr.com",
            text: "backscnr.com",
            type: "web",
          },
        ]}
      />
    </Root>
  );
}
