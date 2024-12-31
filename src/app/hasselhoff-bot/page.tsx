"use client";

import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import CaptionedVideo from "@/components/HeroImage/CaptionedVideo";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import Viewer3D from "@/components/Viewer3D/Viewer3D";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

export default function HasselhoffBotPage() {
  return (
    <Root maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Hasselhoff Bot
      </Typography>

      <HeroImageBase src="roboticist/hasselhoff_hero.jpg" />

      <ProjectMetadata
        skills={[
          "Robotics",
          "C",
          "Hardware",
          "Circuits",
          "Soldering",
          "Embedded",
          "Embedded Systems",
          "STM32 Nucleo Board",
          "16878 Advanced Mechatronic Design Class",
        ]}
      />

      <Viewer3D
        objFile="roboticist/hasselhoff_body.obj"
        textureFile="roboticist/hasselhoff_body.mtl"
      />
      <CaptionedImage
        src="roboticist/cesar_parts.jpg"
        title="The Motivation"
        caption="Manual soil sampling is inefficient, costly, and prone to human error. CESAR offers a cost-effective solution with off-the-shelf components, leveraging teleoperation or waypoint navigation for in-situ soil sampling. Designed for hazardous industrial sites, CESAR enhances sampling efficiency while minimizing human exposure."
        mt={2}
      />
      <CaptionedVideo
        src="roboticist/cesar_driving.mp4"
        title="The Hardware"
        caption="I revived the CESAR robot after years in storage with minimal guidance or documentation. I reconnected all hardware and wiring, including the joystick, and tested components such as cameras, GPS, Wi-Fi, and motors to ensure they worked. I also refactored the code to resolve issues."
        imgPosition="right"
        mt={2}
      />
      <CaptionedVideo
        src="roboticist/cesar_arm.mp4"
        title="Dynamixel Arm"
        caption="I debugged a misconfigured Dynamixel motor using the Dynamixel Wizard and got the arm working to raise and lower as intended, resolving the issue independently."
        mt={2}
      />
    </Root>
  );
}
