"use client";

import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import CaptionedVideo from "@/components/HeroImage/CaptionedVideo";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { VEGMAP_SKILLS } from "@/constants/skills";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));
const HEADER_PT = 4;
const SECTION_PT = 2;

export default function VegmapPlannerPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo
        title="Vegmap Planner"
        imgSrc="student/cmu_lettermark.png"
      />

      <ProjectMetadata
        skills={VEGMAP_SKILLS}
        buttons={[
          {
            url: "https://docs.google.com/viewer?url=https://github.com/w3ichen/vegmap/blob/main/vegmap_paper.pdf?raw=true",
            text: "Paper",
            type: "paper",
          },
          {
            url: "https://github.com/w3ichen/vegmap",
            text: "vegmap",
            type: "github",
          },
        ]}
      />
      <CaptionedImage
        src="roboticist/vegmap_lidar.jpg"
        title="The Motivation"
        caption="Vegetated areas contain grass, bushes, and foliage that appear as solid obstacles to exteroceptive sensors (LiDAR, cameras), but are actually traversable. Traditional methods classify all detected obstacles as non-traversable, resulting in no or suboptimal paths. The LiDAR point cloud image on the left shows how vegetation appears as lethal obstacles."
        mt={SECTION_PT}
      />

      <CaptionedVideo
        src="roboticist/vegmap_planner.mp4"
        title="How it works"
        imgPosition="right"
        caption="Our novel approach initially assumes all obstacles are traversable with estimated costs based on prior knowledge or intuition. Upon collision, proprioceptive sensors (IMU, wheel encoders) measure actual traversability, updating the obstacle costs in real-time. We validated this algorithm in ROS2 Gazebo using a Husky robot and our custom C++ nav2 costmap plugin. I implemented the costmap plugin and the end-to-end nav2 integration."
        mt={SECTION_PT}
      />

      <Typography variant="h5" pt={HEADER_PT}>
        The Algorithm
      </Typography>

      <CaptionedImage
        src="roboticist/vegmap_algo1.jpg"
        title="Initial costmap"
        caption="The initial costmap combines obstacle locations from Gazebo with prior cost knowledge. Each obstacle receives a cost sampled from type-specific Gaussian distributions (trees higher, grass lower), capturing natural vegetation variability. These costs are applied to the costmap at each obstacle's location with a fixed radius. A* or D* Lite planners use this costmap layer to plan a path."
        mt={SECTION_PT}
      />
      <CaptionedImage
        src="roboticist/vegmap_algo2.jpg"
        title="Upon collision"
        caption="Upon collision, the obstacle traversal cost is measured from velocity. The collided obstacle's cost is updated to this measured value and has its standard deviation set to zero, indicating certainty. Using Bayesian updating, the cost database's distribution for this obstacle type is updated with the measured value and costs of similar obstacles that haven't been encountered yet are resampled. The path is replanned with the updated costmap until the goal is reached."
        mt={SECTION_PT}
      />
    </Root>
  );
}
