"use client";

import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

export default function UAlbertaEngPage() {
  return (
    <Root maxWidth="md">
      <Typography variant="h4" gutterBottom>
        UAlberta Engineering
      </Typography>
      <HeroImageBase src="swe/ualberta_eng_hero.jpg" sx={{ height: "300px" }} />

      <ProjectMetadata
        skills={[
          "Engineering",
          "Research",
          "CivE",
          "BME",
          "Python",
          "Git",
          "Videography",
          "WebDev",
          "Cloud Computing",
          "HTML",
          "CSS",
          "JavaScript",
          "Mathematica",
          "Technical Writing",
          "Social Media",
          "Networking",
        ]}
        buttons={[
          {
            url: "https://www.youtube.com/@CivE_UoA",
            text: "@CivE_UoA",
            type: "youtube",
          },
          {
            url: "https://engcourses-uofa.ca",
            text: "EngCourses Open Resources",
            type: "book",
          },
          {
            url: "https://www.ualberta.ca/en/engineering/index.html",
            text: "UAlberta Engineering",
            type: "web",
          },
        ]}
      />
    </Root>
  );
}
