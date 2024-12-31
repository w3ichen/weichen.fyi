"use client";

import CaptionedImage, {
  CAP_IMG_MAX_HEIGHT,
} from "@/components/HeroImage/CaptionedImage";
import CaptionedVideo from "@/components/HeroImage/CaptionedVideo";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

const croppedImgStyle = {
  height: CAP_IMG_MAX_HEIGHT + "px",
  backgroundColor: "black",
};

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
        caption="Patrick features a 4-wheeled robot base paired with a 4-DOF arm and a pXRF sensor for precise in-situ soil sampling."
        imgPosition="right"
        mt={2}
      />
    </Root>
  );
}
