"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import CaptionedImage, {
  CAP_IMG_MAX_HEIGHT,
} from "@/components/HeroImage/CaptionedImage";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

const croppedImgStyle = {
  height: CAP_IMG_MAX_HEIGHT + "px",
  backgroundColor: "black",
};

export default function PatrickRobotPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo
        title="Patrick"
        imgSrc="roboticist/robomechanics_logo.png"
      />

      <HeroImageBase
        src="roboticist/robomechanics_hero.jpg"
        sx={{ height: "300px" }}
      />

      <ProjectMetadata
        skills={["Robotics", "Python", "ROS1", "Gazebo", "RViz"]}
        buttons={[
          {
            url: "https://www.cmu.edu/me/robomechanicslab",
            text: "Lab Website",
            type: "web",
          },
          {
            url: "https://www.linkedin.com/posts/aaron-johnson-47b6772a_robot-robotics-environment-ugcPost-7259029026353090560-V7xL",
            text: "LinkedIn Post",
            type: "linkedin",
          },
          {
            url: "https://engineering.cmu.edu/news-events/news/2024/11/01-robotics-environmental-innovation.html",
            text: "News Article",
            type: "news",
          },
          {
            url: "https://www.sciencedirect.com/science/article/pii/S0301479724011162",
            text: "Paper",
            type: "paper",
          },
        ]}
      />

      <CaptionedIframe
        src="https://www.youtube.com/embed/sSsalqQzWrk?si=aFP2ZnhJ5EArPcgW"
        title="The Problem Patrick Solves"
        caption="Manual soil sampling is inefficient, expensive, and prone to human error. Patrick leverages advanced robotics, adaptive sampling algorithms, and in-situ analysis capabilities to navigate challenging terrains, identify optimal sampling locations, and generate accurate contamination maps. Designed for hazardous industrial sites, Patrick improves sampling efficiency while minimizing human exposure."
        mt={2}
      />
      <CaptionedImage
        src="roboticist/patrick_parts.jpg"
        title="The Hardware"
        caption="Patrick features a 4-wheeled robot base paired with a 4-DOF arm and a pXRF sensor for precise in-situ soil sampling."
        imgPosition="right"
        mt={2}
      />
      <CaptionedImage
        src="roboticist/patrick_gazebo_arm.gif"
        title="Gazebo Simulator"
        caption="I developed Patrick's simulation in Gazebo from scratch. I assembled the URDF file to define its structure and integrated move_base for wheeled navigation, along with an arm trajectory controller to raise and lower the arm."
        mt={2}
        imgProps={{
          // This is to crop out the shorter image and re-center it
          style: {
            ...croppedImgStyle,
            width: "78%",
            objectPosition: "55% center", // Shifts to center image
          },
        }}
      />
      <CaptionedImage
        src="roboticist/patrick_rviz_gradmap.gif"
        title="RViz Visualization"
        caption="Using the publish point tool, I implemented a user-defined search boundary to specify the area of interest. I also visualized the contamination gradient map, which updates in real-time, along with the real robot's roll, pitch, and yaw."
        mt={2}
        imgPosition="right"
        imgProps={{
          // This is to crop out the shorter image and re-center it
          style: {
            ...croppedImgStyle,
            width: "79%",
            objectPosition: "51% center", // Shifts to center image
          },
        }}
      />
      <CaptionedImage
        src="roboticist/patrick_ros_nav.gif"
        title="ROS Navigation Stack"
        caption="I implemented the ROS navigation stack in simulation, using LiDAR for object detection and map creation. The robot autonomously path plans to the next sampling location, avoiding obstacles with SLAM and costmaps."
        mt={2}
        imgProps={{
          // This is to crop out the shorter image and re-center it
          style: {
            ...croppedImgStyle,
            width: "80%",
          },
        }}
      />
    </Root>
  );
}
