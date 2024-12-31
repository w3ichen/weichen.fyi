"use client";

import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import CaptionedVideo from "@/components/HeroImage/CaptionedVideo";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

export default function CesarRobotPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo title="CESAR" imgSrc="roboticist/robomechanics_logo.png" />

      <HeroImageBase
        src="roboticist/robomechanics_hero.jpg"
        sx={{ height: "300px" }}
      />

      <ProjectMetadata
        skills={["Robotics", "Python", "ROS1", "Hardware", "Linux"]}
        buttons={[
          {
            url: "https://www.cmu.edu/me/robomechanicslab",
            text: "Lab Website",
            type: "web",
          },
          {
            url: "https://www.sciencedirect.com/science/article/pii/S0301479724011162",
            text: "Paper",
            type: "paper",
          },
        ]}
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
