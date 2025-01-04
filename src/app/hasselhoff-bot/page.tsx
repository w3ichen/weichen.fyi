"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import CaptionedVideo from "@/components/HeroImage/CaptionedVideo";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import Viewer3DWithImage from "@/components/Viewer3D/Viewer3DWithImage";
import { HASSELHOFF_BOT_SKILLS } from "@/constants/skills";
import { Container, styled, Typography } from "@mui/material";

const Root = styled(Container)(({}) => ({}));
const HEADER_PT = 4;
const SECTION_PT = 2;

export default function HasselhoffBotPage() {
  return (
    <Root maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Hasselhoff Bot
      </Typography>

      <HeroImageBase src="roboticist/hasselhoff_hero.jpg" />

      <ProjectMetadata skills={HASSELHOFF_BOT_SKILLS} />
      <CaptionedIframe
        src="https://www.youtube.com/embed/ljnBSBY5iik?si=eJXdFFbEcu_MqtOJ"
        title="The Mission"
        caption="The Hasselhoff Bot is a small submarine inspired by David Hasselhoff's cameo in the 2004 SpongeBob Movie. In the movie, SpongeBob and Patrick explore the ocean in search of King Neptune's crown to cover his shiny, bald head and David Hasselhoff is the last “vehicle” that propels the two friends back to Bikini Bottom, where they return the crown to King Neptune."
        mt={SECTION_PT}
      />
      <CaptionedVideo
        src="roboticist/hasselhoff_demo.mp4"
        title="How it works"
        imgPosition="right"
        caption="Hasselhoff is a teleoperated submarine equipped with four waterproof motors, an IR beam receiver, and a tethered remote. Users have 99 seconds to navigate underwater, locate an IR beam, and land on its source. Powered by a Nucleo STM32 and a 14.8V Li-ion battery, it communicates with the remote via SPI protocol."
        mt={SECTION_PT}
      />

      <Typography variant="h5" pt={HEADER_PT}>
        Remote Control
      </Typography>
      <Viewer3DWithImage
        glbFile="roboticist/hasselhoff_remote.glb"
        imgSrc="roboticist/hasselhoff_remote_cad.png"
      />
      <CaptionedImage
        src="roboticist/hasselhoff_schematic.png"
        title="The Electronics"
        caption="I designed the electrical schematic, which includes 5 LEDs, 2 joysticks, an LED display, and a potentiometer. I first prototyped the design on breadboards and then transferred it to protoboards for the final prototype. I also developed C code to program the Nucleo’s GPIO pins, configure timers, ADCs, and DMAs, and implement a state machine."
        mt={SECTION_PT}
      />
      <CaptionedImage
        src="roboticist/hasselhoff_remote.jpg"
        title="Mechanical Assembly"
        imgPosition="right"
        caption="In collaboration with mechanical engineers, I assembled the final prototype using three 3D-printed layers. I then attached the user-visible components to the top layer with hot glue, organized and routed the wiring, and secured the assembly with screws, heat-set inserts, and standoffs to ensure a polished and functional product."
        mt={SECTION_PT}
      />

      <Typography variant="h5" pt={HEADER_PT}>
        Submarine
      </Typography>
      <Viewer3DWithImage
        glbFile="roboticist/hasselhoff_sub.glb"
        imgSrc="roboticist/hasselhoff_sub_cad.jpg"
      />
      <CaptionedImage
        src="roboticist/hasselhoff_sub.jpg"
        title="Mechanical Assembly"
        caption="I assisted in the final assembly, which included inserting the Nucleo board and battery into the body and securing the lid with screws and a rubber gasket to achieve a watertight seal. I stayed until the end, working until 4 a.m. on demo day to ensure everything was ready for presentation 🫡."
        mt={SECTION_PT}
      />
    </Root>
  );
}
