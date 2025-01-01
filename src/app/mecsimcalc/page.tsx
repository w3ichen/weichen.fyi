"use client";

import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

export default function MecSimCalcPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo
        title="MecSimCalc"
        imgSrc="entrepreneur/mecsimcalc_logo2.jpg"
      />
      <HeroImageBase
        src="entrepreneur/mecsimcalc_hero.jpg"
        sx={{ height: "300px" }}
      />

      <ProjectMetadata
        skills={[
          "Engineering",
          "Startup",
          "CS",
          "CivE",
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
          "Cloud Computing",
          "AWS",
          "DigitalOcean",
          "Kubernetes",
          "Linux",
          "Docker",
          "AI",
          "Langchain",
          "Leadership",
          "Social Media",
        ]}
        buttons={[
          {
            url: "https://linkedin.com/company/mecsimcalc",
            text: "@mecsimcalc",
            type: "linkedin",
          },
          {
            url: "https://www.youtube.com/@mecsimcalc3063",
            text: "@mecsimcalc3063",
            type: "youtube",
          },
          {
            url: "https://github.com/MecSimCalc",
            text: "MecSimCalc",
            type: "github",
          },
          {
            url: "https://mecsimcalc.com",
            text: "mecsimcalc.com",
            type: "web",
          },
        ]}
      />
    </Root>
  );
}
