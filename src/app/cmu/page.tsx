"use client";

import { HeroImageBase } from "@/components/HeroImage/common";
import PageBase, { LinkNewTab } from "@/components/Page/PageBase";
import { Container, styled, Typography } from "@mui/material";
import { CMU_CLASSES } from "./constants";

const Root = styled(Container)(({}) => ({
  fontFamily: "Open Sans", // Open Sans is CMU's official font
  fontWeight: 300,
  "& .MuiTypography-root": {
    fontFamily: "inherit",
    fontWeight: "inherit",
  },
}));
const UnorderedList = styled("ul")(({}) => ({
  paddingLeft: "40px",
}));
const HEADER_PT = 4;

export default function CmuPage() {
  return (
    <PageBase>
      <Root maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Carnegie Mellon University
        </Typography>
        <HeroImageBase src="student/cmu_hero.jpg" sx={{ height: "300px" }} />
        <Typography variant="h5" pt={HEADER_PT}>
          Degree
        </Typography>
        <Typography variant="body1">
          Masters in Electrical and Computer Engineering, Class of 2025
          <br />
          Jan 2024 - May 2025 | Pittsburgh, USA
        </Typography>

        <Typography variant="h5" pt={HEADER_PT}>
          Research
        </Typography>
        <UnorderedList>
          <li>
            <LinkNewTab href="https://www.cmu.edu/me/robomechanicslab/">
              Robomechanics Lab
            </LinkNewTab>{" "}
            - take robots out of the lab and factory and into challenging real
            world environments
          </li>
        </UnorderedList>

        <Typography variant="subtitle1">PRINCIPAL INVESTIGATORS</Typography>
        <UnorderedList>
          <li>
            <LinkNewTab href="https://www.meche.engineering.cmu.edu/directory/bios/johnson-aaron.html">
              Prof. Aaron Johnson
            </LinkNewTab>
            , Associate Professor, Mechanical Engineering
          </li>
          <li style={{ marginLeft: "40px" }}>
            Courtesy Appointments: Electrical and Computer Engineering, Robotics
            Institute
          </li>
          <li>
            <LinkNewTab href="https://cee.engineering.cmu.edu/directory/bios/lowry-gregory.html">
              Prof. Gregory Lowry
            </LinkNewTab>
            , Sr. Professor, Civil and Environmental Engineering
          </li>
          <li style={{ marginLeft: "40px" }}>
            Courtesy Appointment: Chemical Engineering
          </li>
        </UnorderedList>
        <Typography variant="subtitle1">PUBLICATIONS</Typography>
        <UnorderedList>
          <li>
            Sarah Maenner. &quot;Robotics for environmental innovation.&quot;
            CMU News, Nov 2024.&nbsp;
            <LinkNewTab href="https://engineering.cmu.edu/news-events/news/2024/11/01-robotics-environmental-innovation.html">
              [Article]
            </LinkNewTab>
            &nbsp;
            <LinkNewTab href="https://www.linkedin.com/posts/aaron-johnson-47b6772a_robot-robotics-environment-ugcPost-7259029026353090560-V7xL">
              [LinkedIn]
            </LinkNewTab>
          </li>
        </UnorderedList>

        <Typography variant="h5" pt={HEADER_PT}>
          Coursework
        </Typography>
        {Object.entries(CMU_CLASSES).map(([semester, classes]) => (
          <div key={semester}>
            <Typography variant="subtitle1">
              {semester.toUpperCase()}
            </Typography>
            <UnorderedList>
              {classes.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </UnorderedList>
          </div>
        ))}
      </Root>
    </PageBase>
  );
}
