"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));

const HEADER_PT = 4;

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

      <Typography variant="h5" pt={HEADER_PT}>
        Scona Media Team
      </Typography>
      <CaptionedIframe
        src="https://www.youtube.com/embed/sSsalqQzWrk?si=aFP2ZnhJ5EArPcgW"
        title="Media Team Founding Member"
        caption="As a founding member with Mr. Greg Forsyth, I served as the lead editor of the first-ever Scona Rewind video, which garnered over 3k views and is featured on welcometoscona.ca homepage! I captured photos/videos at school events, edited videos, and livestreamed assemblies."
        links={[
          {
            url: "https://www.youtube.com/@StrathconaHighSchool",
            text: "[Youtube] Strathcona High School",
          },
        ]}
        mt={2}
      />
    </Root>
  );
}
