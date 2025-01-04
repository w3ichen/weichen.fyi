"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import CaptionedVideo from "@/components/HeroImage/CaptionedVideo";
import CaptionedViewer3D from "@/components/HeroImage/CaptionedViewer3D";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { BACKSCNR_SKILLS } from "@/constants/skills";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));
const HEADER_PT = 8;
const SECTION_PT = 8;

export default function BackSCNRPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo
        title="BackSCNR"
        imgSrc="entrepreneur/backscnr_logo2.png"
      />
      <HeroImageBase
        src="entrepreneur/backscnr_hero.jpg"
        sx={{ height: "300px" }}
      />

      <ProjectMetadata
        skills={BACKSCNR_SKILLS}
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
        mt={2}
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
        Tech Stack
      </Typography>
      <CaptionedImage
        src="entrepreneur/backscnr_front.png"
        title="Front-end"
        caption="I built the front-end from the ground up using Next.js, a React.js framework, and the Material-UI design library. I handled every aspect of the process, from coding to UI/UX design, and owned the entire front-end development lifecycle, from conception to deployment."
        unconstrained
      />
      <CaptionedVideo
        src="entrepreneur/backscnr_demo.mp4"
        title="3D Manipulation & Visualization"
        caption="I used Three.js for interactive 3D visualizations and tools, and Open3D and Trimesh for mesh manipulation, including auto-cropping with TensorFlow's PoseNet."
        imgPosition="right"
      />
      <CaptionedViewer3D
        src="entrepreneur/backscnr_mesh.glb"
        title="Back-end"
        caption="I built the back-end using Python's Django framework and a PostgreSQL database, hosted on a DigitalOcean Kubernetes cluster. I implemented GitHub Actions workflows for seamless continuous integration and collaborated closely with MS/PhD/PostDocs to integrate their algorithms, ensuring a robust infrastructure with minimal downtime."
        mt={SECTION_PT}
        viewer3DProps={{ cameraPosition: [10, 0, 10] }}
      />
      <CaptionedImage
        src="entrepreneur/backscnr_ios.jpg"
        title="iOS App"
        caption="I developed the iOS app using Xcode and Objective-C, integrating the Structure Sensor SDK for a seamless user experience from scan capture to upload. After publishing it to the App Store, I worked closely with the Structure team to troubleshoot sensor issues and gain early access to their unreleased technologies."
        imgPosition="right"
        mt={SECTION_PT}
        links={[
          {
            url: "https://structure.io/developers/",
            text: "[Web] Structure SDK",
          },
        ]}
      />
    </Root>
  );
}
