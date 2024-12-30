"use client";

import CaptionedIframe from "@/components/HeroImage/CaptionedIframe";
import CaptionedImage from "@/components/HeroImage/CaptionedImage";
import { HeroImageBase } from "@/components/HeroImage/common";
import { Container, styled, Typography } from "@mui/material";
import { SCONA_AWARDS } from "./constants";

const Root = styled(Container)(({}) => ({}));

const OrderedList = styled("ol")(({}) => ({
  paddingLeft: "40px",
}));
const HEADER_PT = 4;

export default function SconaPage() {
  return (
    <Root maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Strathcona High School
      </Typography>
      <HeroImageBase src="student/scona_hero.jpg" sx={{ height: "300px" }} />
      <Typography variant="h5" pt={HEADER_PT}>
        Degree
      </Typography>
      <Typography variant="body1">
        <strong>High School Diploma, Class of 2018</strong>
        <br />
        Sept 2015 - Jun 2018 | Edmonton, Canada
        <br />
        <em>* Graduated on May 23, 2018</em>
      </Typography>

      <Typography variant="h5" pt={HEADER_PT}>
        Awards & Scholarships
      </Typography>
      <OrderedList>
        {SCONA_AWARDS.map((award, i) => (
          <li key={`award-${i}`}>{award}</li>
        ))}
      </OrderedList>

      <Typography variant="h5" pt={HEADER_PT}>
        Scona Media Team
      </Typography>
      <CaptionedIframe
        src="https://www.youtube.com/embed/DuHDfjfUwG4?si=RmFu5fGvovl9Jpw9"
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

      <Typography variant="h5" pt={HEADER_PT}>
        Scona Theatre Co.
      </Typography>
      <CaptionedImage
        src="student/scona_theatre_img1.jpg"
        title="Rent (2016)"
        caption="In Theatre Tech, I was actively involved in the drama community, gaining firsthand experience in theatre production and backstage operations. I worked on the crew for Rent and Bring it on, serving as Head of both Front-of-House and Video, which led to a nomination for Special Effects and Technology. Additionally, I livestreamed school assemblies and contributed backstage to dance productions."
        links={[
          {
            url: "https://edmontonjournal.com/entertainment/theatre/cappies-reviews-rent",
            text: "[Edmonton Journal] Cappies Reviews: Rent",
          },
        ]}
        mt={2}
      />
      <CaptionedImage
        src="student/scona_theatre_img2.jpg"
        title="Bring it on (2017)"
        caption={`“Weichen Qiu was responsible for the pre-recorded Skype calls throughout the show, which were impressively created and integrated into the musical. [...] an onstage Skype video call by Weichen Qiu provided a creative element. [...] special effects by Weichen Qiu were convincingly real. [...] the video chats created by Qiu highlighted his talents perfectly.”`}
        imgPosition="right"
        links={[
          {
            url: "https://edmontonjournal.com/entertainment/local-arts/cappies-reviews-bring-it-on",
            text: "[Edmonton Journal] Cappies Reviews: Bring it on",
          },
        ]}
        mt={2}
      />

      <Typography variant="h5" pt={HEADER_PT}>
        Leadership
      </Typography>
      <CaptionedIframe
        src="https://www.youtube.com/embed/AtMcyx5ruvU?si=FxtJ8iNfRzSoK1oO"
        title="Scona Initiative: As One Who Serves"
        caption={
          <>
            As a leadership student, I helped plan and volunteer at school
            events, fundraising through door-to-door campaigns and bottle
            drives. I contributed to all three annual 24-hour bikeathons,
            Canada&apos;s largest student-led fundraiser:
            <ul style={{ paddingLeft: "20px" }}>
              <li>Bike2Box (2016): $449,000 for ShelterBox</li>
              <li>
                Hope in Motion (2017): $466,000 for Jack Davis Hope Foundation
              </li>
              <li>
                Break the Cycle (2018): $518,522 for UN World Food Programme
              </li>
            </ul>
          </>
        }
        links={[
          {
            url: "https://www.sconainitiative.ca/history",
            text: "[Scona Initiative] Past initiatives",
          },
        ]}
        mt={2}
      />

      <Typography variant="h5" pt={HEADER_PT}>
        Scona Swim Team
      </Typography>
      <CaptionedImage
        src="student/scona_swim.jpg"
        title="Swim Coach"
        caption="From 2015-2018, I swam competitively on the undefeated Scona Swim Team, helping secure three consecutive city championships, marking our 30th, 31st, and 32nd titles. After graduating, I returned as a coach to give back, continue the legacy, and help the team win their 33rd city championship!"
        links={[
          {
            url: "https://www.youtube.com/watch?v=0sbvORRdypc",
            text: "[Youtube] Scona Swim Promo",
          },
          {
            url: "https://www.youtube.com/watch?v=oDcOGshajHc",
            text: "[Youtube] Scona Swim Team Info",
          },
        ]}
        mt={2}
      />
    </Root>
  );
}
