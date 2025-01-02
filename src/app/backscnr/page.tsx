"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));
const HEADER_PT = 4;
const SECTION_PT = 2;

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
      <CaptionedIframe
        src="https://www.youtube.com/embed/NamzRog9RAg"
        title="The Motivation"
        caption="Scoliosis affects 5% of the population and is 8 times more common in girls, with 30% of patients requiring brace treatment. However, X-ray imaging, the standard diagnostic tool, exposes patients to harmful radiation, increasing their long-term cancer risk. BackSCNR introduces a novel, radiation-free solution using Surface Topography analysis for diagnosis and ongoing monitoring."
        mt={SECTION_PT}
      />
      <CaptionedImage
        src="entrepreneur/backscnr_method.jpg"
        title="How it works"
        caption="Surface topography captures a 3D torso mesh with a non-invasive depth sensor, mirrors it, and overlays the original mesh (red) with the mirrored mesh (blue). Spinal asymmetry is measured by mm deviations between the two meshes, generating a deviation map. This map is then input into AI models to predict severity and Cobb angle, the gold standard for scoliosis."
        imgPosition="right"
        links={[
          {
            url: "https://link.springer.com/article/10.1186/s12891-018-2303-4",
            text: "[Paper] 3D Markerless asymmetry analysis",
          },
        ]}
        mt={SECTION_PT}
      />

      <Typography variant="h5" pt={HEADER_PT}>
        The Tech Stack
      </Typography>
    </Root>
  );
}
