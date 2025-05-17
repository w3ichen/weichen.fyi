"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import CaptionedVideo from "@/components/HeroImage/CaptionedVideo";
import CaptionedViewer3D from "@/components/HeroImage/CaptionedViewer3D";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { HAPTIC_HAND_SKILLS } from "@/constants/skills";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));
const HEADER_PT = 4;
const SECTION_PT = 2;

export default function HapticHandPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo title="Haptic Hand" imgSrc="student/cmu_lettermark.png" />

      <HeroImageBase src="roboticist/haptic_hand_hero.jpg" />

      <ProjectMetadata
        skills={HAPTIC_HAND_SKILLS}
        buttons={[
          {
            url: "https://github.com/w3ichen/haptic-hand",
            text: "haptic-hand",
            type: "github",
          },
        ]}
      />
      <CaptionedIframe
        src="https://www.youtube.com/embed/TPRUQxR6-_I?si=awFXhcoWokcSI6Qi"
        title="The Motivation"
        caption="The Haptic Hand is a low-cost, 3D-printed haptic device that delivers force feedback for hand interactions with virtual objects. It has promising applications as an educational tool with the SHRED Lab, and future work will integrate it to teleoperate a hand from the Foam Robotics Lab."
        mt={SECTION_PT}
        links={[
          {
            text: "[Web] SHRED Haptics Lab",
            url: "https://shredlabcmu.github.io",
          },
          {
            text: "[Web] Foam Robotics Lab",
            url: "https://labs.ri.cmu.edu/foamroboticslab",
          },
        ]}
      />
      <CaptionedViewer3D
        src="roboticist/haptic_hand.glb"
        title="How it works"
        imgPosition="right"
        caption="The user's thumb connects to the delta robot's end effector, while index and middle fingers attach to separate haplink devices. A Processing IDE visualization shows finger positions and the 3D virtual object, complementing haptic feedback from the 7 DC motors. The three reference frames map to a global frame, with all virtual object interactions programmed in C on the Nucleo board."
        mt={SECTION_PT}
      />

      <Typography variant="h5" pt={HEADER_PT}>
        Thumb
      </Typography>
      <CaptionedVideo
        src="roboticist/haptic_thumb.mp4"
        title="Delta Robot x1"
        caption="The delta robot features 3 motors positioned at 0°, 120°, and 240° with 6 links, providing 3DOF movement. I adapted the forward kinematics code to track the thumb's xyz position and implemented the Jacobian matrix to convert 3D force vectors into motor torques. The haptic feedback system I programmed generates opposing forces proportional to the thumb's penetration depth into virtual objects."
        mt={SECTION_PT}
      />

      <Typography variant="h5" pt={HEADER_PT}>
        Fingers
      </Typography>
      <CaptionedVideo
        src="roboticist/haptic_fingers.mp4"
        title="Haplink Device x2"
        imgPosition="right"
        caption="Each finger uses a separate 2DOF haplink device with 2 motors and capstan drives. We miniaturized our class lab haplinks and modified them to stand upright with finger holders. I debugged GPIO pins, motor configurations, and resolved Git issues."
        mt={SECTION_PT}
      />
    </Root>
  );
}
