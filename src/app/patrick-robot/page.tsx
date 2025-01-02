"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import CaptionedVideo, {
  CAP_VIDEO_MAX_HEIGHT,
} from "@/components/HeroImage/CaptionedVideo";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import Viewer3D from "@/components/Viewer3D/Viewer3D";
import { Box, Container, styled } from "@mui/material";

const Root = styled(Container)(({}) => ({}));
const SECTION_PT = 2;

const croppedImgStyle = {
  height: CAP_VIDEO_MAX_HEIGHT + "px",
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
        skills={["Robotics", "Python", "ROS1", "Gazebo", "RViz", "Linux"]}
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
        title="The Motivation"
        caption="Manual soil sampling is inefficient, expensive, and prone to human error. Patrick leverages advanced robotics, adaptive sampling algorithms, and in-situ analysis capabilities to navigate challenging terrains, identify optimal sampling locations, and generate accurate contamination maps. Designed for hazardous industrial sites, Patrick improves sampling efficiency while minimizing human exposure."
        mt={SECTION_PT}
      />
      <CaptionedImage
        src="roboticist/patrick_parts.jpg"
        title="The Hardware"
        caption="Patrick features a 4-wheeled robot base paired with a 4-DOF arm and a pXRF sensor for precise in-situ soil sampling."
        imgPosition="right"
        mt={SECTION_PT}
      />
      <CaptionedVideo
        src="roboticist/patrick_gazebo_arm.mp4"
        title="Gazebo Simulator"
        caption="I developed Patrick's simulation in Gazebo from scratch. I assembled the URDF file to define its structure and integrated move_base for wheeled navigation, along with an arm trajectory controller to raise and lower the arm."
        mt={SECTION_PT}
        videoProps={{
          // This is to crop out the shorter video and re-center it
          style: {
            ...croppedImgStyle,
            width: "78%",
            objectPosition: "55% center", // Shifts to center video
          },
        }}
      />
      <CaptionedVideo
        src="roboticist/patrick_rviz_gradmap.mp4"
        title="RViz Visualization"
        caption="Using the publish point tool, I implemented a user-defined search boundary to specify the area of interest. I also visualized the contamination gradient map, which updates in real-time, along with the real robot's roll, pitch, and yaw."
        mt={SECTION_PT}
        imgPosition="right"
        videoProps={{
          // This is to crop out the shorter video and re-center it
          style: {
            ...croppedImgStyle,
            width: "79%",
            objectPosition: "51% center", // Shifts to center video
          },
        }}
      />
      <CaptionedVideo
        src="roboticist/patrick_ros_nav.mp4"
        title="ROS Navigation Stack"
        caption="I implemented the ROS navigation stack in simulation, using LiDAR for object detection and map creation. The robot autonomously path plans to the next sampling location, avoiding obstacles with SLAM and costmaps."
        mt={SECTION_PT}
        videoProps={{
          // This is to crop out the shorter video and re-center it
          style: {
            ...croppedImgStyle,
            width: "80%",
          },
        }}
      />

      <Box mt={5} width="100%" height="400px">
        <Viewer3D glbFile="roboticist/patrick.glb" />
      </Box>
    </Root>
  );
}
