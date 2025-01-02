"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import { HeroImageBase } from "@/components/HeroImage/common";
import ProjectMetadata from "@/components/Page/ProjectMetadata";
import TitleWithLogo from "@/components/Page/TitleWithLogo";
import { Container, styled } from "@mui/material";

const Root = styled(Container)(({}) => ({}));
const SECTION_PT = 2;

export default function UatkdPage() {
  return (
    <Root maxWidth="md">
      <TitleWithLogo
        title="UAlberta Taekwondo Club"
        imgSrc="creator/uatkd_logo2.png"
      />

      <HeroImageBase src="creator/uatkd_hero.jpg" sx={{ height: "300px" }} />

      <ProjectMetadata
        skills={[
          "Leadership",
          "Conflict Resolution",
          "Public Speaking",
          "Networking",
          "Athletics",
          "Social Media",
          "Photography",
          "Videography",
          "WebDev",
          "HTML",
          "CSS",
          "JavaScript",
          "NextJS",
          "ReactJS",
        ]}
        buttons={[
          {
            url: "https://uatkd.ca",
            text: "uatkd.ca",
            type: "web",
          },
          {
            url: "https://www.instagram.com/ua_taekwondo",
            text: "@ua_taekwondo",
            type: "instagram",
          },
          {
            url: "https://www.youtube.com/@uatkd",
            text: "@uatkd",
            type: "youtube",
          },
          {
            url: "https://www.youtube.com/@t1tkdclub6",
            text: "@t1tkdclub6",
            type: "youtube",
          },
        ]}
      />

      <CaptionedIframe
        src="https://www.youtube.com/embed/57j_EHmYI48?si=EwAfnvyO9UvWp5Jy"
        title="Social Media Coordinator"
        caption={
          <>
            I joined the club in 2018 and was promoted to Social Media
            Coordinator in 2020. I played a key role in building the club&apos;s
            online presence through social media and content creation. My
            efforts helped grow the club from a small, unknown group to the
            second-largest club sport on campus, with <strong>400+</strong>{" "}
            members on our mailing list and <strong>150+</strong> paying members
            by 2023.
          </>
        }
        mt={SECTION_PT}
      />
      <CaptionedImage
        src="creator/uatkd_award.jpg"
        title="President"
        imgPosition="right"
        caption={
          <>
            As President, I led a team of 17 execs and mentors. Under my
            leadership, we won the{" "}
            <strong>Club Sport of the Year Award 2022/23</strong> for the first
            time in the club&apos;s history, out of 23 other clubs. I
            implemented and enforced a new harassment policy, which had been
            absent before. This award reflected our exceptional leadership,
            well-organized practices/events, and commitment to fostering an
            inclusive community.
          </>
        }
        links={[
          {
            url: "https://www.instagram.com/p/CqdgeALJ2Pf",
            text: "[Instagram] Club Sport Award Post",
          },
        ]}
        mt={SECTION_PT}
      />
      <CaptionedImage
        src="creator/uatkd_web.png"
        title="Web Developer"
        caption="I took the initiative to design and develop the club's website entirely from scratch using Next.js and React.js, creating a centralized hub for all essential club information. The website includes links, registration instructions, FAQs, and more, making it a valuable resource for recruiting new members."
        links={[
          {
            url: "https://github.com/UAlberta-Taekwondo-Club/nextjs-website",
            text: "[Github] UAlberta-Taekwondo-Club/nextjs-website",
          },
        ]}
        unconstrained // unconstrained image to show shadow from browser screenshot
        spacing={1}
      />
    </Root>
  );
}
