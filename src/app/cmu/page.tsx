"use client";

import { HeroImageBase } from "@/components/HeroImage/common";
import LinkNewTab from "@/components/Buttons/LinkNewTab";
import TimelineList from "@/components/TimelineList/TimelineList";
import { Container, styled, Typography } from "@mui/material";
import { CMU_CERTIFICATES, CMU_CLASSES, CMU_RESEARCH_LABS } from "./constants";

const Root = styled(Container)(({}) => ({
  // fontFamily: "Open Sans", // Open Sans is CMU's official font
  fontWeight: 300,
  "& .MuiTypography-root": {
    fontFamily: "inherit",
    fontWeight: "inherit",
  },
}));
const UnorderedList = styled("ul")(({}) => ({
  paddingLeft: "40px",
}));
const OrderedList = styled("ol")(({}) => ({
  paddingLeft: "40px",
}));
const HEADER_PT = 4;

export default function CmuPage() {
  return (
    <Root maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Carnegie Mellon University
      </Typography>
      <HeroImageBase src="student/cmu_hero.jpg" sx={{ height: "300px" }} />
      <Typography variant="h5" pt={HEADER_PT}>
        Degree
      </Typography>
      <Typography variant="body1">
        <strong>
          Master of Science in Electrical and Computer Engineering, Class of
          2025
        </strong>
        <br />
        Jan 2024 - May 2025 | Pittsburgh, USA
        <br />
        <em>* Graduated on May 11, 2025</em>
      </Typography>

      <Typography variant="h5" pt={HEADER_PT}>
        Research
      </Typography>
      <TimelineList items={CMU_RESEARCH_LABS} />

      <Typography variant="subtitle1">PRINCIPAL INVESTIGATORS</Typography>
      <UnorderedList>
        <li>
          <LinkNewTab href="https://www.meche.engineering.cmu.edu/directory/bios/johnson-aaron.html">
            <strong>Dr. Aaron Johnson</strong>
          </LinkNewTab>
          , Associate Professor, Mechanical Engineering
        </li>
        <li style={{ marginLeft: "40px" }}>
          Courtesy Appointments: Electrical and Computer Engineering, Robotics
          Institute
        </li>
        <li>
          <LinkNewTab href="https://cee.engineering.cmu.edu/directory/bios/lowry-gregory.html">
            <strong>Dr. Gregory Lowry</strong>
          </LinkNewTab>
          , Sr. Professor, Civil and Environmental Engineering
        </li>
        <li style={{ marginLeft: "40px" }}>
          Courtesy Appointment: Chemical Engineering
        </li>
      </UnorderedList>
      <Typography variant="subtitle1">PUBLICATIONS</Typography>
      <OrderedList>
        <li>
          Sarah Maenner.{" "}
          <strong>&quot;Robotics for environmental innovation.&quot;</strong>{" "}
          CMU News, Nov 2024.&nbsp;
          <LinkNewTab href="https://engineering.cmu.edu/news-events/news/2024/11/01-robotics-environmental-innovation.html">
            [Article]
          </LinkNewTab>
          &nbsp;
          <LinkNewTab href="https://www.linkedin.com/posts/aaron-johnson-47b6772a_robot-robotics-environment-ugcPost-7259029026353090560-V7xL">
            [LinkedIn]
          </LinkNewTab>
        </li>
      </OrderedList>

      <Typography variant="h5" pt={HEADER_PT}>
        Certifications
      </Typography>
      <OrderedList>
        {CMU_CERTIFICATES.map((certificate, i) => (
          <li key={`certificate-${i}`}>{certificate}</li>
        ))}
      </OrderedList>

      <Typography variant="h5" pt={HEADER_PT}>
        Coursework
      </Typography>
      {Object.entries(CMU_CLASSES).map(([semester, classes]) => (
        <div key={semester}>
          <Typography variant="subtitle1">{semester.toUpperCase()}</Typography>
          <UnorderedList>
            {classes.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </UnorderedList>
        </div>
      ))}
    </Root>
  );
}
